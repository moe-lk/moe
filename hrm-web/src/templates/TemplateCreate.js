/* eslint react/jsx-key: off */
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Create, required, SaveButton, SelectInput, SimpleForm, TextInput, Toolbar } from 'react-admin';

import data from '../data';
import TemplateBuilder from './TemplateBuilder';
import { Grid } from '@material-ui/core';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 512
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
            redirect="show"
            submitOnEnter={true}
        />
        {permissions === 'admin' && (
            <SaveButton
                label="Save And Add"
                redirect={false}
                submitOnEnter={false}
                variant="flat"
            />
        )}
    </Toolbar>
);


const checkRecord = (value) => value == 'sleas';

const TemplateCreate = ({ permissions, classes, formData, ...props }) => (
    <Create {...props}>
        <SimpleForm toolbar={<EditToolbar permissions={permissions} />}>
            <Typography component="h5">
                Template Builder
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
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={12}>
                    <TemplateBuilder validate={required()} source="body" />
                </Grid>
            </Grid>
        </SimpleForm>
    </Create>
);

export default withStyles(styles)(TemplateCreate);
