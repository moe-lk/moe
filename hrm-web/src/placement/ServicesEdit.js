import React from 'react';
import { Edit, SaveButton, SimpleForm, Toolbar } from 'react-admin';

import CreateAddPlacement from './CreateAddPlacement';




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


const PlacementCreate = ({ permissions, classes, formData, ...props }) => (
    <Edit {...props}>
        <SimpleForm toolbar={<ServicesEditToolbar permissions={permissions} />} label="Current Service Details" autoComplete="off" path="">
            <CreateAddPlacement></CreateAddPlacement>
        </SimpleForm>
    </Edit>
);

export default PlacementCreate
