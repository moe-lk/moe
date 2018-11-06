// in SubGenreInput.js
import React, { Component } from 'react';
import { SelectInput, ReferenceInput, FormDataConsumer } from 'react-admin';
import { DependentInput } from 'aor-dependent-input';
import { Grid } from '@material-ui/core';

class DivisionInput extends Component {

    handleWorkPlace = (props) => {
        if (props.work_place_id == 5 || props.work_place_id == 6) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="space-between">
                <Grid xs={3}>
                    <DependentInput resolve={this.handleWorkPlace}>
                        <FormDataConsumer>
                            {({ formData, ...rest }) =>
                                formData ? formData.work_place_id &&
                                    <ReferenceInput label="Province" source="province_id" reference="options" filter={{ table: 'Province_List' }}>
                                        <SelectInput optionText="province" {...rest} />
                                    </ReferenceInput>
                                    : ''
                            }
                        </FormDataConsumer>
                    </DependentInput>
                </Grid>
                <Grid xs={3}>
                    <DependentInput resolve={this.handleWorkPlace}>
                        <FormDataConsumer>
                            {({ formData, ...rest }) =>
                                formData ? formData.province_id &&
                                    <ReferenceInput label="Working Devision" source="work_division_id" reference="options" filter={{ table: 'Province_Offices', filter: ['province_id,=,' + formData.province_id] }}>
                                        <SelectInput optionText="province_office" {...rest} />
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

export default DivisionInput;