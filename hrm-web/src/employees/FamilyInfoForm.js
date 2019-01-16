/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import {
    ArrayInput,
    DateInput,
    FormTab,
    ImageField,
    ImageInput,
    maxLength,
    minLength,
    number,
    RadioButtonGroupInput,
    SelectInput,
    SimpleFormIterator,
    TextInput,
    required,
    regex
} from 'react-admin';

import data from '../data';


const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36 },
    right: { display: 'inline-block', marginRight: 36 },
});

/*Form Validations*--START*/
// const validatePhoneno = [number('Must be number'), minLength(10,'Must be 10 Digits'),regex(/^\d{10}$/,'Must be 10 Digits')];
// const validateNIC=[regex(/(^\w{9}(V))|(^\w{12})$/,'Allowed format : "9 Digits with V or 12 Digits"')];
// const checkCharacter=[regex(/^[a-zA-Z]*$/,'Must be letters')];
/*Form Validations*--END*/

class FamilyInfoForm extends Component {


    render() {
        return (
            <FormTab>
                <TextInput
                    source="Spouse_Details.nic"
                    label="NIC Number"
                    formClassName={this.props.classes.right}
                    // validate={validateNIC}
                />
                <TextInput
                    source="Spouse_Details.full_name"
                    label="Full Name"
                    formClassName={this.props.classes.left}
                    // validate={checkCharacter}
                    inputProps={{placeholder:'Arachige Mohan Rathnayake '}}
                            validate={required()}
                   
                />
             
                <TextInput
                    source="Spouse_Details.in_name"
                    label="Name with Initials in English"
                    formClassName={this.props.classes.left}
                    // validate={checkCharacter}
                    inputProps={{placeholder:'A.R.M. Rathnayaka'}}
                            validate={required()}
                    
                   
                />
                <TextInput
                    source="Spouse_Details.si_in_name"
                    label="Name with Initials in Sinhala"
                    formClassName={this.props.classes.left}
                    inputProps={{placeholder:'ආර්.ආර්.රත්නායක'}}
                            style = {{width:300}}
                            validate={required()}
                />
                <TextInput
                    source="Spouse_Details.ta_in_name"
                    label="Name with Initials in Tamil"
                    formClassName={this.props.classes.left}
                    inputProps={{placeholder:'எ.ர்.எம்.ரத்நாயக்க'}}
                            style = {{width:300}}
                />
                <RadioButtonGroupInput
                    source="Spouse_Details.gender"
                    formClassName={this.props.classes.right}
                    label="Gender"
                    choices={data.gender} />
                <SelectInput
                    source="Spouse_Details.ethinicity"
                    label="Ethnicity"
                    formClassName={this.props.classes.right}
                    choices={data.ethinicity}
                />
                <SelectInput
                    source="Spouse_Details.riligion"
                    label="Religion"
                    formClassName={this.props.classes.right}
                    choices={data.religion}
                />
                <DateInput
                    source="Spouse_Details.dob"
                    formClassName={this.props.classes.left}
                    label="Date of Birth"
                   
                >
                </DateInput>
                <TextInput
                    source="Spouse_Details.address"
                    label="Address"
                    formClassName={this.props.classes.left}
                />
                <TextInput
                    source="Spouse_Details.occupation"
                    label="Occupation"
                    formClassName={this.props.classes.left}

                />

                <TextInput
                    source="Spouse_Details.office_address"
                    label="Office Address"
                    formClassName={this.props.classes.left}
                />
                <TextInput
                    source="Spouse_Details.telephone"
                    label="Telephone Number"
                    formClassName={this.props.classes.left}
                    // validate={validatePhoneno}
                />

                <ArrayInput source="Children_Details" label="Children Details" >
                    <SimpleFormIterator >
                        <TextInput
                            source="name"
                            label="Child Name"
                            formClassName={this.props.classes.left}
                            // validate={checkCharacter}
                        />
                        <DateInput
                            source="dob"
                            formClassName={this.props.classes.left}
                            label="Date of Birth"
                           
                        />
                        <RadioButtonGroupInput
                            source="gender"
                            formClassName={this.props.classes.right}
                            label="Gender"
                            choices={data.gender} />
                        <ImageInput source="bc" label="Birth Certificate" accept="image/*">
                            <ImageField source="bc" title="title" />
                        </ImageInput>
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        )
    }


}
/** */
export default withStyles(styles)(FamilyInfoForm);
