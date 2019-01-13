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
    ReferenceInput
} from 'react-admin';
import data from '../data';
import React, { Component, Fragment } from 'react';
import { DependentInput } from 'aor-dependent-input';
import { Grid } from '@material-ui/core';
// import ReferenceInput from 'r'

const styles = theme => ({
    left: { display: 'inline-block' },
})


class DesignationsSelectInput extends Component {


    render() {
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={3}>
                    <DependentInput dependsOn="service_sector" value="sleas">
                        <ReferenceInput label="Designation" validate={required()} source="designation_id" reference="options" filter={{ table: 'Designation' }}>
                            <AutocompleteInput   optionText="designation" />
                        </ReferenceInput>
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="sltes">
                        <AutocompleteInput
                            source="designation_id"
                            label="Designation"
                            validate={required()}
                            choices={data.designations.sltes}
                        />
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="slps">
                        <AutocompleteInput
                            source="designation_id"
                            label="Designation"
                            validate={required()}
                            choices={data.designations.slps}
                        />
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="slts">
                        <AutocompleteInput
                            source="designation_id"
                            label="Designation"
                            validate={required()}
                            choices={data.designations.slts}
                        />
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="cs">
                        <AutocompleteInput
                            source="designation_id"
                            label="Designation"
                            validate={required()}
                            choices={data.designations.cs}
                        />
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="non-cs">
                        <AutocompleteInput
                            source="designation_id"
                            label="Designation"
                            validate={required()}
                            choices={data.designations.ncs}
                        />
                    </DependentInput>
                    <DependentInput dependsOn="service_sector" value="all_is">
                        <AutocompleteInput
                            source="designation_id"
                            label="Designation"
                            validate={required()}
                            choices={data.designations.all_is}
                        />
                        </DependentInput>
                    
                </Grid>
            </Grid>
        )
    }
}

export default DesignationsSelectInput;