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
} from 'react-admin';

import data from '../data';


const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36 },
    right: { display: 'inline-block', marginRight: 36 },
});

const validatePhoneno = [ number()];
const validateNIC = [ minLength(10), maxLength(12)];

class FamilyInfoForm extends Component {


    render() {
        return (
            <FormTab>
                <TextInput
                    source="Spouse_Details.nic"
                    label="NIC Number"
                    formClassName={this.props.classes.right}
                    validate={validateNIC}
                />
                <TextInput
                    source="Spouse_Details.f_name"
                    label="First Name"
                    formClassName={this.props.classes.left}
                   
                />
                <TextInput
                    source="Spouse_Details.m_name"
                    label="Middle Name"
                    formClassName={this.props.classes.right}
                />
                <TextInput
                    source="Spouse_Details.l_name"
                    label="Last Name"
                    formClassName={this.props.classes.left}
                />
                <TextInput
                    source="Spouse_Details.in_name"
                    label="Name with Initials in English"
                    formClassName={this.props.classes.left}
                   
                />
                <TextInput
                    source="Spouse_Details.si_in_name"
                    label="Name with Initials in Sinhala"
                    formClassName={this.props.classes.left}
                />
                <TextInput
                    source="Spouse_Details.ta_in_name"
                    label="Name with Initials in Tamil"
                    formClassName={this.props.classes.left}
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
                    validate={validatePhoneno}
                />

                <ArrayInput source="Children_Details" label="Children Details" >
                    <SimpleFormIterator >
                        <TextInput
                            source="name"
                            label="Child Name"
                            formClassName={this.props.classes.left}
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

export default withStyles(styles)(FamilyInfoForm);
