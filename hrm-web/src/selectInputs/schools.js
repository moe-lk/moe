import {
    SelectInput,
    required,
    FormDataConsumer,
    ReferenceInput,
    AutocompleteInput
} from 'react-admin';
import data from '../data';
import { withStyles } from '@material-ui/core/styles';
import React, { Component, Fragment } from 'react';
import { DependentInput } from 'aor-dependent-input';
import cloneDeep from 'clone-deep';
import { Grid, Typography } from '@material-ui/core'

const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36 },
})



class SchoolSelectInput extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }





    switchSector = (props) => {
        if (props.service_sector == 'slps' || props.service_sector == 'slts') {
            // this.state.props = props
            return true
        } else {
            return false
        }
    };


    render() {
        // if (this.state.working_place !== 17) return null;
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={3}>
                    <DependentInput resolve={this.switchSector}>
                        <SelectInput
                            source="work_place_id"
                            label="Working Place"
                            choices={[
                                {id:16,name:'National School'},
                                {id:17,name:'School'}
                            ]}
                        />
                    </DependentInput>
                </Grid>
                <Grid item xs={3}>
                    <DependentInput resolve={this.switchSector}>
                        <ReferenceInput
                            label="Provice"
                            source="school_data.province"
                            reference="options"
                            filter={{ table: 'Province_List', filter: ['id,!=,0'] }}>
                            <SelectInput
                                optionText="province"
                            />
                        </ReferenceInput>
                    </DependentInput>
                </Grid>
                <Grid item xs={3}>
                    <DependentInput resolve={this.switchSector}>
                        <FormDataConsumer>
                            {({ formData, ...rest }) =>
                                formData.school_data ? formData.school_data.province &&
                                    <ReferenceInput label="District" source="school_data.district" reference="options" filter={{ table: 'District_List', filter: ['province_id,=,' + formData.school_data.province] }}>
                                        <SelectInput optionText="district" {...rest} />
                                    </ReferenceInput>
                                    : ''
                            }
                        </FormDataConsumer>
                    </DependentInput>
                </Grid>
                <Grid item xs={3}>
                    <DependentInput resolve={this.switchSector}>
                        <FormDataConsumer>
                            {({ formData, ...rest }) =>
                                formData.school_data ? formData.school_data.district &&
                                    <ReferenceInput label="Zone" source="school_data.zone" reference="options" filter={{ table: 'Zone_List', filter: ['dist_id,=,' + formData.school_data.district] }}>
                                        <SelectInput optionText="zone" optionValue="zone_id" {...rest} />
                                    </ReferenceInput>
                                    : ''
                            }
                        </FormDataConsumer>
                    </DependentInput>
                </Grid>
                <Grid item xs={3}>
                    <DependentInput resolve={this.switchSector}>
                        <FormDataConsumer>
                            {({ formData, ...rest }) =>
                                formData.school_data ? formData.school_data.zone &&
                                    <ReferenceInput label="Division" source="school_data.division" reference="options" filter={{ table: 'Division_List', filter: ['zone_id,=,' + formData.school_data.zone] }}>
                                        <SelectInput optionText="division_name" optionValue="div_id"  {...rest} />
                                    </ReferenceInput>
                                    : ''
                            }
                        </FormDataConsumer>
                    </DependentInput>
                </Grid>
                <Grid item xs={3}>
                    <DependentInput resolve={this.switchSector}>
                        <FormDataConsumer>
                            {({ formData, ...rest }) =>
                                formData.school_data ? formData.school_data.division &&
                                    <ReferenceInput
                                        label="School"
                                        source="school_data.institute_id"
                                        reference="options"
                                        filter={    
                                            {
                                                table: 'Institute',
                                                filter: ['div_id,=,' + formData.school_data.division],
                                                work_place: ['workplace_id,=,' + formData.work_place_id]
                                            }
                                        }><AutocompleteInput optionText="institute_name" optionValue="institute_id" {...rest} />
                                    </ReferenceInput>
                                    : ''
                            }
                        </FormDataConsumer>
                    </DependentInput>
                </Grid>
            </Grid>

        )
    }
}

export default withStyles(styles)(SchoolSelectInput);