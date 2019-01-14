/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */

import {
    AutocompleteInput,
    required,
} from 'react-admin';
import data from '../data';
import { withStyles } from '@material-ui/core/styles';
import React, { Component, Fragment } from 'react';
import { DependentInput } from 'aor-dependent-input';
import { Grid } from '@material-ui/core';
import SchoolSelectInput from './schools';
import BranchInput from './branch';
import DivisionInput from './division';
import DivisionalOffices from './divisionalOffices';
import ZoanlOfficeSelectInput from './zonalOffices';
import Institutes from './institutes';
// import ReferenceInput from 'r'

const styles = theme => ({
    left: { display: 'inline-block' },
})


class WorkingPlacesSelectInput extends Component {


    render() {
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="space-between">
                <Grid xs={3}>
                    <DependentInput dependsOn="service_sector" value="sleas">
                        <AutocompleteInput
                            source="work_place_id"
                            label="Working Place"
                            validate={required()}
                            choices={data.working_places.sleas}
                        />
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="sltes">
                        <AutocompleteInput
                            source="work_place_id"
                            label="Working Place"
                            validate={required()}
                            choices={data.working_places.sltes}
                        />
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="cs">
                        <AutocompleteInput
                            source="work_place_id"
                            label="Working Place"
                            validate={required()}
                            choices={data.working_places.cs}
                        />
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="all_is">
                        <AutocompleteInput
                            source="work_place_id"
                            label="Working Place"
                            validate={required()}
                            choices={data.working_places.all_is}
                        />
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="non-cs">
                        <AutocompleteInput
                            source="work_place_id"
                            label="Working Place"
                            validate={required()}
                            choices={data.working_places.ncs} />
                    </DependentInput>
                </Grid>
                <BranchInput></BranchInput>
                <Institutes></Institutes>
                <DivisionInput></DivisionInput>
                <DivisionalOffices></DivisionalOffices>
                <ZoanlOfficeSelectInput></ZoanlOfficeSelectInput>
                <SchoolSelectInput></SchoolSelectInput>
            </Grid>
        )
    }
}

export default withStyles(styles)(WorkingPlacesSelectInput);