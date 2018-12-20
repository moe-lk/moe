/* eslint react/jsx-key: off */
import PeopleIcon from '@material-ui/icons/People';
import ActiveIcon from '@material-ui/icons/Check'
// import ApprovedIcon  from '@material-ui/icons/'
import InActiveIcon from '@material-ui/icons/Warning'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import React from 'react';
import {
    Datagrid,
    EditButton,
    SaveButton,
    Filter,
    List,
    Responsive,
    SearchInput,
    ShowButton,
    SimpleList,
    TextField,
    SelectField,
    TextInput,
    DateInput,
    DateField,
    SelectInput,
    Pagination
} from 'react-admin';
import data from '../data';
import { Button } from '@material-ui/core';

export const UserIcon = PeopleIcon;


const EmployeeFilter = ({ permissions, ...props }) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        
        <TextInput source="f_name" label="First Name" />
        <TextInput source="l_name" label="Last Name" />
        <TextInput source="NIC" label="National Identity Card" />
        <SelectInput
            source="service_status"
            label="Service Status"
            choices={data.active}
        />
        {permissions === 'admin' ? <TextInput source="role" /> : null}
    </Filter>
);

const ListPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
const ActiveField = ({ record }) => record.id == 1 ? <ActiveIcon /> : <InActiveIcon />;
const PlacementButton = ({ record, ...props }) => (
    <EditButton
        label="Add Placement"
        submitOnEnter={true}
        variant="flat"
        to={{
            pathname: '/placement/create',
            state: { record: { person_id: record.id } },
        }}
    />
)

const EditEmployee = ({ record, ...props }) => (
    <EditButton
        submitOnEnter={true}
        variant="flat"
        to={{
            pathname: `/employees/`+record.id,
            state:record,
        }} />
)

const EmployeeList = ({ permissions, ...props }) => (

    <List
        {...props} pagination={<ListPagination />}
        filters={<EmployeeFilter permissions={permissions} />}
        sort={{ field: 'id', order: 'ASC' }}
        filterDefaultValues={{ active: 1 }}
    >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.f_name}
                    secondaryText={record => `${record.NIC}`}
                    // tertiaryText={record =><ActiveField />}
                />
            }
            medium={

                <Datagrid hover={false}  >
                    {/* <TextField source="id" label="EmployeeID"/> */}
                    <TextField source="NIC" label="NIC" />
                    <TextField source="title" label="Title" />
                    <TextField source="in_name" label="Name" />
                    <SelectField
                        source="active"
                        label="Status"
                        choices={data.active}
                    />
                    <SelectField
                        source="approved"
                        label="Approv"
                        choices={data.approve}
                    />
                    {/* {permissions === 'admin' && <TextField />} */}
                    <EditEmployee />
                    <ShowButton />
                    <PlacementButton />

                </Datagrid>
            }
        />
    </List>
);

export default EmployeeList;
