import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import {
    ArrayInput,
    DateInput,
    ImageField,
    ImageInput,
    ReferenceInput,
    SelectInput,
    SimpleFormIterator,
    TextInput,
} from 'react-admin';
import data from '../data';

const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36 },
})

// const validateResults = [required(),maxLength(6)];


const ContactDetails = ({ permissions, ...props, classes }) => (
    <ArrayInput source="Qualifications" label="Qualifications list" >
        <SimpleFormIterator>
            <SelectInput
                source="qualification_type_id"
                label="Type of Qualifications"
                formClassName={classes.left}
                choices={data.qualification_type}
            />
            <SelectInput
                label="Qualifications"
                source="qualification_id"
                formClassName={classes.left}
                choices={data.qualification}
            />
            <DateInput
                source="qualified_date"
                label="Date of Qualified"
                formClassName={classes.left}
            />
            <TextInput
                source="qualification_grade"
                label="Qualification Grade"
                formClassName={classes.left}
                // validate={validateResults}
            />
            <TextInput
                source="qualified_institute"
                label="Name of the Institue"
                formClassName={classes.left}
            />
            <ImageInput label="Upload Certification" source="certificate_path">
                <ImageField />
            </ImageInput>
        </SimpleFormIterator>
    </ArrayInput>
)

export default withStyles(styles)(ContactDetails);