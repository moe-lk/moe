/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import { ArrayInput, email, number,maxLength,minLength, NumberInput, required, SelectInput, SimpleFormIterator, TextInput } from 'react-admin';

import data from '../data';


const validatePostalcode = [required(), number()];
const validateEmail = email();
const validatePhoneno = [required(), number(),maxLength(10),minLength(10)];


const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36 },
})

const ContactDetails = ({ permissions, ...props, classes }) => (
    <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
    >
        <ArrayInput source="Contact_Details" >
            <SimpleFormIterator>
                <SelectInput
                    source="address_type"
                    label="Address Type"
                    formClassName={classes.left}
                    choices={data.address_type}
                />
                <TextInput
                    source="address_1"
                    formClassName={classes.left}
                    label="Address Line 1" />
                <TextInput
                    source="address_2"
                    formClassName={classes.left}
                    label="Address Line 2" />
                <TextInput
                    source="address_3"
                    formClassName={classes.left}
                    label="City" />
                <NumberInput
                    source="postal_code"
                    label="Postal Code"
                    formClassName={classes.left}
                    validate={validatePostalcode}
                />
                <TextInput
                    source="mobile"
                    label="Mobile Number"
                    formClassName={classes.left}
                    validate={validatePhoneno}
                />
                <TextInput
                    source="telephone"
                    label="Telephone Number"
                    formClassName={classes.left}
                    validate={validatePhoneno}
                />
                <TextInput
                    source="email"
                    label="Email Address"
                    formClassName={classes.left}
                    type="email"
                    validate={validateEmail} />

            </SimpleFormIterator>
        </ArrayInput>
    </Grid>
)

export default withStyles(styles)(ContactDetails);