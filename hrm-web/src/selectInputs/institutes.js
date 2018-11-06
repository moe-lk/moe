import {
    AutocompleteInput,
    FormDataConsumer,
    ReferenceInput
} from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { DependentInput } from 'aor-dependent-input';
import { Grid } from '@material-ui/core'

const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36 },
})



class InstitutesSelectInput extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    switchSector = (props) => {
        if (props.work_place_id >= 9 && props.work_place_id <= 15 && props.service_sector !== 'slps' && props.service_sector !== 'slts') {
            return true;
        } else {
            return false;
        }
    }


    render() {
        return (
            <DependentInput resolve={this.switchSector}>
                <FormDataConsumer>
                    {({ formData, ...rest }) =>
                        formData ? formData.work_place_id &&
                            <ReferenceInput label="Name of the Institute" source="work_branch_id" reference="options" filterToQuery={searchText => ({ search: searchText })} filter={{ table: 'Institute', work_place: ['workplace_id,=,' + formData.work_place_id] }}>
                                <AutocompleteInput optionText="institute_name" {...rest} />
                            </ReferenceInput>
                            : ''
                    }
                </FormDataConsumer>
            </DependentInput>
        )
    }
}

export default InstitutesSelectInput;