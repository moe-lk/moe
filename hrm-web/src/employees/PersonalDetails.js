import { Grid, withStyles } from '@material-ui/core';


import React, { Component, createContext } from 'react';
import {
    BooleanInput,
    DateInput,
    ImageField,
    ImageInput,
    RadioButtonGroupInput,
    required,
    SelectInput,
    TextInput,
    regex,
    minLength,
    maxLength,
    
} from 'react-admin';

import ReactDropzone from 'react-dropzone'

import data from '../data';
import { upload } from '../dataProvider/imageUpload';

/*Form Validations--START*/
const validateNIC=[required(),regex(/(^\w{9}(V))|(^\w{12})$/,'Allowed format :"9 Digits with V or 12 Digits"')];
// const checkCharacter=[required(),regex(/^[a-zA-Z]*$/,'Must be letters')];
// const checkCharacter1=[regex(/^[a-zA-Z]*$/,'Must be letters')];

// const birthdateValidation = (values) => {
//     const errors = {};
//     var dob =values.Personal_Details.dob;
//     var year = Number(dob.substr(0, 4));
//     var today = new Date();
//     var age = today.getFullYear() - year;
//     if (!values.Personal_Details.dob) {
//         errors.Personal_Details.dob = ['DOB is required'];
//     }
//     if (age>18) {
//         errors.Personal_Details.dob = ['Invalid DOB'];
//     } 
//     return errors
// };

/*Form Validations--END*/

const { Provider, Consumer } = createContext();

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    left: { display: 'inline-block' },
    right: { display: 'inline-block' },
    radio: { display: 'inline-block', marginRight: 36 },
})


class PersonalDetails extends Component {

    constructor(props) {
        super(props);
        this.props.location ?
            this.state = {
                familyTab: this.props.location.state.civil_status
            } :
            this.state = {
                familyTab: 2
            }
    }

    onDrop = (files,source) => {
        console.log(this);
        // POST to a test endpoint for demo purposes
        console.log(files);
        source.push(files);
        this.state = {
            profile_pic:files
        }
        // this.setState({ files: updatedFiles });
        this.props.input.onChange(files);
        upload(this.props.record.id,files,this.props.basePath)
        console.log(source);

    }


    handleChange = (event, value) => {
        console.log(this.state)
        this.setState({ familyTab: value })
    };


    render() {
        return (
            <Grid container spacing={12} >
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch">
                    <Grid item xs={3}>
                        <SelectInput
                            source="Personal_Details.title"
                            label="Title"
                            validate={required()}
                            choices={data.title}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextInput
                            source="Personal_Details.f_name"
                            label="First Name"
                            // validate={checkCharacter}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextInput
                            source="Personal_Details.m_name"
                            label="Middle Name"
                            // validate={checkCharacter1}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextInput
                            source="Personal_Details.l_name"
                            label="Last Name"
                            // validate={checkCharacter}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch">
                    <Grid item xs={3}>
                        <TextInput
                            source="Personal_Details.in_name"
                            label="Name with Initials in English"
                            // validate={checkCharacter}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextInput
                            source="Personal_Details.si_in_name"
                            label="Name with Initials in Sinhala"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextInput
                            source="Personal_Details.ta_in_name"
                            label="Name with Initials in Tamil"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <DateInput
                            source="Personal_Details.dob"
                            label="Date of Birth"
                            // validate={required()}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch">
                    <Grid item xs={3}>
                        <TextInput
                            source="Personal_Details.NIC"
                            label="NIC Number"
                            validate={validateNIC}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <SelectInput
                            source="Personal_Details.ethinicity"
                            label="Ethnicity"
                            choices={data.ethinicity}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <SelectInput
                            source="Personal_Details.religion"
                            label="Religion"
                            choices={data.religion}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <RadioButtonGroupInput
                            source="Personal_Details.gender"
                            label="Gender"
                            choices={data.gender} />
                    </Grid>
                    <Grid item xs={3}>
                        <Provider familyTab={this.state.familyTab}>
                            <SelectInput
                                source="Personal_Details.civil_status"
                                label="Civil Status"
                                choices={data.civil_status}
                                onChange={this.handleChange} />
                        </Provider>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch">
                    <Grid item xs={3}  >
                        <ImageInput
                            options={{onDrop:this.onDrop}}
                            source="Personal_Details.profile_pic"
                            label="Profile Picture" accept="image/*">
                            <ImageField source="Personal_Details.profile_pic" 
                             title="title"  />
                        </ImageInput>
                    </Grid>
                    <Grid item xs={3}>
                        <BooleanInput
                            label="Inactive/Active"
                            source="Personal_Details.active" />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(PersonalDetails);