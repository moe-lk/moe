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
import { DependentInput } from 'aor-dependent-input';
import React from 'react';
import { DateInput, NumberInput, RadioButtonGroupInput, required, SelectInput, TextInput } from 'react-admin';

import data from '../data';
import WayOfJoinSelectInput from '../selectInputs/wayOfJoin';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    left: { display: 'inline-block' },
    right: { display: 'inline-block' },
    radio: { display: 'inline-block', marginRight: 36 },
})


const PersonalDetails = ({ permissions, classes, formData, ...props }) => (
    <Grid container spacing={12} >
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch">
            <Grid item xs={3}>
                <SelectInput
                    source="General_Service.service_sector"
                    label="Service Sector"
                    choices={data.sector}
                />
            </Grid>
            <Grid item xs={3}>
                <DateInput
                    source="General_Service.f_appoint_date"
                    label="Date Appointed"
                />
            </Grid>
            <Grid item xs={3}>
                <DateInput
                    source="General_Service.date_join"
                    label="Date joined"
                    validate={required()}
                />
            </Grid>
            <Grid item xs={3}>
                <WayOfJoinSelectInput dependsOn="General_Service.service_sector" />
            </Grid>
        </Grid>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch">
            <Grid item xs={3}>
                <SelectInput
                    source="General_Service.medium"
                    label="Medium"
                    formClassName={classes.left}
                    validate={required()}
                    choices={data.medium}
                />
            </Grid>
            <Grid item xs={3}>
                <RadioButtonGroupInput
                    source="General_Service.cadre"
                    formClassName={classes.radio}
                    maxWidth={true}
                    alignItems="row"
                    label="Cadre"
                    choices={data.cadre} />
            </Grid>
            <Grid item xs={3}>
                <SelectInput
                    source="General_Service.grade_join"
                    formClassName={classes.left}
                    maxWidth={true}
                    alignItems="row"
                    label="Grade Join"
                    choices={data.grade} />
            </Grid>
            <Grid item xs={3}>
                <RadioButtonGroupInput
                    source="General_Service.confirm"
                    formClassName={classes.radio}
                    maxWidth={true}
                    alignItems="row"
                    label="Confirm"
                    choices={data.confirm} />
            </Grid>
            <Grid item xs={3}>
                <DependentInput dependsOn="General_Service.way_join" value={3}>
                    <NumberInput
                        source="General_Service.entrance_exam_rank"
                        label="Entrance Exam Rank"
                        validate={required()}
                        formClassName={classes.left}
                    />
                </DependentInput>
            </Grid>
        </Grid>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch">
            <Grid item xs={3}>
                <TextInput
                    source="General_Service.w_and_op"
                    label="W & OP Number"
                    formClassName={classes.left}
                />
            </Grid>
            <Grid item xs={3}>
                <DateInput
                    source="General_Service.confirm_date"
                    label="Date of Confirmation"
                    formClassName={classes.left}
                />
            </Grid>
        </Grid>
    </Grid>
)

export default withStyles(styles)(PersonalDetails);