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
import { AutocompleteArrayInput, ReferenceArrayInput, SelectInput } from 'react-admin';

import data from '../data';

const optionRenderer = choice => `${choice.in_name}`;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    left: { display: 'inline-block' },
})

/********************************************************************
 * This is the General form for AccountSettings form for Employee   *
 * in this application.This form is used in two places.             *
 * EmployeeCreate.js                                                *
 * EmployeeEdit.js                                                  *
 * And changes on this component will impect in both places.        *
 * @param {*} permissions    contain the permission for the module  *
 * ******************************************************************
 */
const AccountSettings = ({ permissions, classes, formData, ...props }) => (
    <Grid container spacing={12} >
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch">
            <Grid item xs={3}>
                <SelectInput
                    source="Account_Details.level"
                    label="User Level"
                    formClassName={classes.left}
                    choices={data.user_level}
                />
            </Grid>
            <Grid item xs={3}>
                <DependentInput dependsOn="Account_Details.level" value={1}>
                    <ReferenceArrayInput label="Nominator" reference="employees" source="Account_Details.nominators" filter={{ active: 1, user_level: 2 }} allowDuplicates={false}
                        filterToQuery={searchText => ({ in_name: searchText })}> 
                        <AutocompleteArrayInput optionValue="id" optionText={optionRenderer} />
                    </ReferenceArrayInput>
                </DependentInput>
            </Grid>
        </Grid>
    </Grid>
)

export default withStyles(styles)(AccountSettings);