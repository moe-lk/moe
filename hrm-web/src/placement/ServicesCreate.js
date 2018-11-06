import React, { Component } from 'react';
import {
    AutocompleteInput,
    Create,
    Filter,
    ReferenceInput,
    SaveButton,
    SearchInput,
    SelectInput,
    SimpleForm,
    TextInput,
    Toolbar,
} from 'react-admin';

import CreateAddPlacement from './CreateAddPlacement';


//End Validations

const ServicesEditToolbar = ({ permissions, ...props }) => (
    <Toolbar {...props}>
        <SaveButton
            label="Save and View"
            redirect="show"
            submitOnEnter={true}
        />
        {permissions === 'admin' && (
            <SaveButton
                label="Save and Add"
                redirect={false}
                submitOnEnter={false}
                variant="flat"
            />
        )}
    </Toolbar>
);



class PlacementCreate extends Component {


    componentWillReceiveProps() {
        if (this.props.location !== undefined) {
            this.state = this.props.location.state
        }
        console.log(this)
    }

    render() {
        return (
            <Create {...this.props}>
                <SimpleForm toolbar={<ServicesEditToolbar permissions={this.props.permissions} />} label="Current Service Details" autoComplete="off" path="">
                    <ReferenceInput label="Search Employee" source="person_id" reference="employees" filter={{ active: 1 }} >
                        <AutocompleteInput optionText="in_name" />
                    </ReferenceInput>
                    <CreateAddPlacement></CreateAddPlacement>
                </SimpleForm>
            </Create>
        )
    }
}

export default PlacementCreate;