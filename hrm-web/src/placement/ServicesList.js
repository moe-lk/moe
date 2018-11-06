/* eslint react/jsx-key: off */
import ActiveIcon from '@material-ui/icons/Check';
import PeopleIcon from '@material-ui/icons/People';
import InActiveIcon from '@material-ui/icons/Warning';
import React from 'react';
import {
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    Pagination,
    ReferenceField,
    Responsive,
    SearchInput,
    SelectField,
    SelectInput,
    ShowButton,
    SimpleList,
    TextField,
    TextInput,
} from 'react-admin';

import data from '../data';

// import ApprovedIcon  from '@material-ui/icons/'
export const UserIcon = PeopleIcon;


const ServicesFilter = ({ permissions, ...props }) => (
    <Filter {...props}>
        <TextInput source="nic" label="National Identity Card" />

        <SearchInput source="q" alwaysOn />
        <SelectInput
            source="service_mode"
            label="Mode of Service"
            choices={data.service_mode}
        />
        <SelectInput
            source="service_status"
            label="Service Status"
            choices={data.active}
        />
        <DateInput source="appoint_date" label="Appoint Date" />
        {/* {permissions === 'admin' ? <TextInput source="role" /> : null} */}
    </Filter>
);

const ListPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
const ActiveField = ({ record }) => record.id == 1 ? <ActiveIcon /> : <InActiveIcon />;

const ServicesList = ({ permissions, ...props }) => (

    <List
        {...props} pagination={<ListPagination />}
        filters={<ServicesFilter permissions={permissions} />}
        sort={{ field: 'id', order: 'ASC' }}
        filterDefaultValues={{ active: 1 }}
    >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.f_name}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record =>
                        new Date(record.published_at).toLocaleDateString()
                    }
                />
            }
            medium={

                <Datagrid hover={false}  >
                    {/* <TextField source="id" label="ServicesID"/> */}
                    <TextField source="NIC" label="NIC" />
                    <ReferenceField label="Name of the Employee"  source="person_id" reference="employees">
                        <TextField source="in_name" />
                    </ReferenceField>
                    <SelectField
                        source="service_mode"
                        label="Mode of Service"
                        choices={data.service_mode}
                    />
                    <ReferenceField label="Working Place" source="work_place_id"   reference="workplace">
                        <TextField source="work_place" />
                    </ReferenceField>
                    {/* <ReferenceField label="Designation" source="designation_id"  reference="options" filter={{ table: 'Designation'}}>
                        <SelectField optionText="work_place" />
                    </ReferenceField> */}
                    <DateField source="appoint_date" label="Appoint Date" />
                    <SelectField 
                        source="service_status"
                        label="Status"
                        choices={data.active}
                        // record={record}
                        optionText={<ActiveField />}
                    />
                    {/* {permissions === 'admin' && <TextField />} */}
                    <EditButton />
                    <ShowButton />
                </Datagrid>
            }
        />
    </List>
);

export default ServicesList;
