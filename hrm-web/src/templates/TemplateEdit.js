/* eslint react/jsx-key: off */
import React from 'react';
import {
    Edit,
    SaveButton,
    Toolbar,
    SelectInput,
    TextInput,
    required,
    SimpleForm
} from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import TemplateBuilder from './TemplateBuilder';
import data from '../data';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    left: { display: 'inline-block', marginRight: 36 },
    right: { display: 'inline-block', marginRight: 36 },
    branch: { display: 'inline-block', marginRight: 36 },
    email: { width: 544 },
    fullLenght: { wid: 380 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});


// const classes = this.props;

const EditToolbar = ({ permissions, ...props }) => (
    <Toolbar {...props}>
        <SaveButton
            label="Save And Show"
            submitOnEnter={false}
        />
    </Toolbar>
);


const checkRecord = (value) => value == 'sleas';

const TemplateCreate = ({ permissions, classes, formData, ...props }) => (
    <Edit {...props}>
        <SimpleForm toolbar={<EditToolbar permissions={permissions} />}>
            <Typography  component="h5">
                Build your Tetter Template with Template Builter
            </Typography>
            <TextInput
                source="name"
                formClassName={classes.left}
                validate={required()}
            ></TextInput>
            <SelectInput
                source="medium"
                choices={data.medium}
                formClassName={classes.left}
                validate={required()}
            ></SelectInput>
            <SelectInput
                source="type"
                label="Mode of Service Status"
                choices={data.service_mode}
                formClassName={classes.left}
                validate={required()}
            />
            <TemplateBuilder  {...props} {...this} validate={required()} source="body" />
        </SimpleForm>
    </Edit>
);

export default withStyles(styles)(TemplateCreate);
