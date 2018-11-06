import {
    SelectInput,
    required,
    FormDataConsumer,
    ReferenceInput,
} from 'react-admin';
import React, { Component } from 'react';
import { DependentInput } from 'aor-dependent-input';
import { Grid } from '@material-ui/core';


class DivisionalOfficeSelectInput extends Component {


    switchSector = (props) => {
        if (props.work_place_id == 8) {
            return true;
        } else {
            return false;
        }
    }


    render() {
        return (
            <Grid xs={24}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="space-between">
                    <Grid item xs={3}>
                        <DependentInput resolve={this.switchSector}>
                            <ReferenceInput
                                label="Provice"
                                source="province"
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
                                    formData ? formData.province &&
                                        <ReferenceInput label="District" source="district" reference="options" filter={{ table: 'District_List', filter: ['province_id,=,' + formData.province] }}>
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
                                    formData ? formData.district &&
                                        <ReferenceInput label="Zone" source="zone" reference="options" filter={{ table: 'Zone_List', filter: ['dist_id,=,' + formData.district] }}>
                                            <SelectInput optionText="zone" {...rest} />
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
                                    formData ? formData.zone &&
                                        <ReferenceInput label="Division Office" source="work_branch_id" reference="options"  filter={{ table: 'Divisional_Offices', filter: ['zone_id,=,' + formData.zone] }}>
                                            <SelectInput optionText="division_office" {...rest} />
                                        </ReferenceInput>
                                        : ''
                                }
                            </FormDataConsumer>
                        </DependentInput>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default DivisionalOfficeSelectInput;