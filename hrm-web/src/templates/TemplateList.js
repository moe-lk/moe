/* eslint react/jsx-key: off */
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import React from 'react';
import {
    Datagrid,
    EditButton,
    Filter,
    List,
    Responsive,
    SearchInput,
    ShowButton,
    SimpleList,
    TextField,
    SelectField,
    Pagination
} from 'react-admin';
import data from '../data';

export const UserIcon = PeopleIcon;

const TemplateFilter = ({ permissions, ...props }) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        {/* {permissions === 'admin' ? <TextInput source="role" /> : null} */}
    </Filter>
);

const ListPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]}  {...props} />
const TemplateList = ({ permissions, ...props }) => (

    <List
        {...props} pagination={<ListPagination />}
        filters={<TemplateFilter permissions={permissions} />}
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
                    <TextField source="id" label="ID" />
                    <SelectField
                        source="type"
                        label="Mode of Service Status"
                        choices={data.service_mode}
                        optionText="name"
                    />
                    <TextField source="created_at" label="Created" />
                    <EditButton />
                    <ShowButton  />
                </Datagrid>
            }
        />
    </List>
);

export default TemplateList;
