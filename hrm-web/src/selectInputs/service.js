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


class ServiceSelectInput extends Component {


    render() {
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={3}>
                    
                    
                    <DependentInput dependsOn="service_sector" value="cs">
                        <AutocompleteInput
                            source="cs_service"
                            label="Service"
                            validate={required()}
                            choices={data.service.cs}
                        />
                    </DependentInput>
                   
                    <DependentInput dependsOn="service_sector" value="all_is">
                        <AutocompleteInput
                            source="ai_service"
                            label="Service"
                            validate={required()}
                            choices={data.ai_service}
                        />
                        </DependentInput>
                    
                </Grid>
            </Grid>
        )
    }
}

export default ServiceSelectInput;