import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import { DateInput, FileInput, required, SelectInput, TextInput } from 'react-admin';

import data from '../data';
import DesignationsSelectInput from '../selectInputs/designations';
import WorkingPlaceSelectInput from '../selectInputs/workingPlaces';
import ServiceSelectInput from '../selectInputs/service';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    left: { display: 'inline-block' },
})


const CreateAddPlacements = ({ permissions, classes, formData, ...props }) => (
    <Grid container spacing={12} >
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch">
            <Grid item xs={3}>
                <SelectInput
                    source="service_sector"
                    label="Service Sector"
                    validate={required()}
                    formClassName={classes.left}
                    choices={data.sector}
                />
            </Grid>
            <Grid item xs={3}>
                <SelectInput
                    source="service_mode"
                    label="Mode of Service Status"
                    validate={required()}
                    formClassName={classes.left}
                    choices={data.service_mode}
                />
            </Grid>
            <Grid item xs={3}>
                <SelectInput
                    source="grade"
                    label="Present Grade"
                    choices={data.grade}
                />
            </Grid>
              <Grid item xs={3}>
                  <SelectInput
                      source="class"
                      label="Present Class"
                      choices={data.class}
                  />
              </Grid>
            <Grid item xs={3}>
                <SelectInput
                    source="class"
                    label="Present Class"
                    choices={data.class}
                />
            </Grid>
            <Grid item xs={3}>
            <DateInput
                    source="psc_letter_date"
                    label="PSC Letter Date"
                    validate={required()}
                />
                </Grid>
                <Grid item xs={3}>
               
               <ServiceSelectInput></ServiceSelectInput>
           </Grid>
            <Grid item xs={3}>
                <SelectInput
                    source="class"
                    label="Present Class"
                    choices={data.class}
                />
            </Grid>
            <Grid item xs={3}>
            <DateInput
                    source="psc_letter_date"
                    label="PSC Letter Date"
                    validate={required()}
                />
                </Grid>
                <Grid item xs={3}>
               
               <ServiceSelectInput></ServiceSelectInput>
           </Grid>

            <Grid item xs={3}>
               
                <DesignationsSelectInput></DesignationsSelectInput>
            </Grid>
        </Grid>
        <WorkingPlaceSelectInput></WorkingPlaceSelectInput>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch">
            <Grid item xs={3}>
                <DateInput
                    source="duty_date"
                    label="Date of assumed duties"
                    formClassName={classes.left}
                    validate={required()}

                ></DateInput>
            </Grid>
            <Grid item xs={3}>
                <DateInput
                    source="appoint_date"
                    label="Date of Appointment"
                    validate={required()}
                />

            </Grid>
            <Grid item xs={3}>
                <TextInput
                    source="off_letter_no"
                    label="Officer Reference No"
                    validate={required()}
                    formClassName={classes.left}
                ></TextInput>
            </Grid>
            <Grid item xs={3}>
                <TextInput
                    source="psc_letter_no"
                    label="PSC Letter No"
                    validate={required()}
                    formClassName={classes.left}
                ></TextInput>
            </Grid>
        </Grid>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch">
            <FileInput
                source="off_letter"
                label="Offer Letter"
                formClassName={classes.left} >
            </FileInput>
        </Grid>
    </Grid>
)

export default withStyles(styles)(CreateAddPlacements);