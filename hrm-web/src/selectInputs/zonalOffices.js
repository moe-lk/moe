import { Grid } from '@material-ui/core';
import { DependentInput } from 'aor-dependent-input';
import React, { Component } from 'react';
import { FormDataConsumer, ReferenceInput, SelectInput } from 'react-admin';

const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36 },
})



class ZoanlOfficeSelectInput extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }





    switchSector = (props) => {
        if (props.work_place_id == 7) {
            return true;
        } else {
            return false;
        }
    }


    render() {
        // if (this.state.working_place !== 17) return null;
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
                                        <ReferenceInput label="Zonel Office" source="zone" reference="options" filter={{ table: 'Zonal_Offices', filter: ['dist_id,=,' + formData.district] }}>
                                            <SelectInput optionText="zonal_office" {...rest} />
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

export default ZoanlOfficeSelectInput;