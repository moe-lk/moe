/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import { Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PrintIcon from '@material-ui/icons/Print';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    ArrayField,
    Datagrid,
    DateField,
    EmailField,
    GET_ONE,
    ImageField,
    ReferenceField,
    SelectField,
    Show,
    ShowButton,
    Tab,
    TabbedShowLayout,
    TextField,
} from 'react-admin';

import data from '../data';
import dataProvider from '../dataProvider';
import EmployeeTitle from './EmployeeTitle';


/* eslint react/jsx-key: off */

const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36, minWidth: 192 },
    right: { display: 'inline-block', marginRight: 36 },
    profile_pic: { maxWidth: 256, },
    bigAvatar: {
        width: 60,
        height: 60,
    },
});


const ActiveField = ({ record }) => record.Personal_Details != undefined ? record.Personal_Details.active == 1 ? <Button>Deactivate</Button> : <Button>Activate</Button> : '';
const ProfileImage = ({ record }) => {
    console.log(record)
    if (record.Personal_Details !== undefined) {
        if (record.Personal_Details.profile_pic == null || record.Personal_Details.profile_pic == 'Array') {
            record.Personal_Details.profile_pic = '../images/employees/' + record.Personal_Details.gender + '.jpg';
        }
        return (
            <Grid item xs={12}>
                <Avatar style={{
                    width: 150,
                    height: 150,
                    margin: 12,
                    border: 10
                }} src={record.Personal_Details.profile_pic} />
            </Grid>
        )
    } else {
        return (
            ''
        )
    }

};

const PlacementButton = ({ record, ...props }) => (
    <ShowButton
        label="Print Placement Letter"
        icon={PrintIcon}
        submitOnEnter={true}
        variant="flat"
        to={{
            pathname: `/placement/${record.id}/show`,
            state: { record: { person_id: record.id } },
        }}
    />
)

class EmployeeShow extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }


    componentWillReceiveProps() {
        console.log(this)
        dataProvider(GET_ONE, 'employees', { id: this.props.id })
            .then(response => response.data)
            .then(employee => {
                // this.state = employee;
                this.setState({ employee })
            })
    }

    render() {

        return (
            <Show title={<EmployeeTitle />} {...this.props}>
                <TabbedShowLayout>
                    <Tab label="Employee Summery">
                        <ProfileImage className={this.props.classes.left} />
                        <ActiveField label="Active/Inactive" ></ActiveField>
                        <TextField source="Personal_Details.title" className={this.props.classes.left} label="Title" />
                        <TextField source="Personal_Details.in_name" className={this.props.classes.left} label="Full name with initials" />
                        <TextField source="Personal_Details.si_in_name" className={this.props.classes.left} label="Full name with initials In Sinhala" />
                        <TextField source="Personal_Details.ta_in_name" className={this.props.classes.left} label="Full name with initials In Tamil" />
                        <TextField source="Personal_Details.f_name" className={this.props.classes.left} label="First name" />
                        <TextField source="Personal_Details.m_name" className={this.props.classes.left} label="Middle name" />
                        <TextField source="Personal_Details.l_name" className={this.props.classes.left} label="Last name" />
                        <TextField source="Personal_Details.NIC" className={this.props.classes.left} label="NIC" />
                        <SelectField className={this.props.classes.left} choices={data.gender} source="Personal_Details.gender" label="Gender" />
                        <SelectField className={this.props.classes.left} choices={data.civil_status} source="Personal_Details.civil_status" label="Civil Status" />
                        <SelectField className={this.props.classes.left} choices={data.ethinicity} source="Personal_Details.ethinicity" label="Ethnicity" />
                        <SelectField className={this.props.classes.left} choices={data.religion} source="Personal_Details.religion" label="Religion" />
                        <DateField source="Personal_Details.dob" className={this.props.classes.left} label="Date of Birth" />
                    </Tab>
                    <Tab label="Contact Details">
                        <ArrayField source="Contact_Details">
                            <Datagrid>
                                <SelectField choices={data.address_type} source="address_type" label="Address Type" />
                                <TextField source="address_1" label="Address Line One" />
                                <TextField source="address_2" label="Address Line Two" />
                                <TextField source="address_3" label="Address Line Three" />
                                <TextField source="postal_code" label="Postal Code" />
                                <TextField source="telephone" label="Telephone Number" />
                                <TextField source="mobile" label="Mobile Number" />
                                <EmailField source="email" label="Email Address" />
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    
                    <Tab label="General Service Details">
                        <SelectField className={this.props.classes.left} choices={data.sector} source="General_Service.service_sector" label="Service Sector" />
                        <DateField className={this.props.classes.left} source="General_Service.date_join" label="Date Joined" />
                        <DateField className={this.props.classes.left} source="General_Service.f_appoint_date" label="Pensionable Date" />
                        <SelectField className={this.props.classes.left} choices={data.way_of_join} source="General_Service.way_join" label="Way Of Joined" />
                        <SelectField className={this.props.classes.left} choices={data.medium} source="General_Service.medium" label="Medium" />
                        <SelectField className={this.props.classes.left} choices={data.grade} source="General_Service.grade_join" label="Grade" />
                        <SelectField className={this.props.classes.left} choices={data.class} source="General_Service.class" label="Class" />
                        <SelectField className={this.props.classes.left} choices={data.cadre} source="General_Service.cadre" label="Cardre When Joining" />
                        <SelectField className={this.props.classes.left} choices={data.confirm} source="General_Service.confirm" label="Confirm" />
                        <DateField className={this.props.classes.left} source="General_Service.confirm_date" label="Date of Confirmation" />
                        <TextField source="General_Service.w_and_op" className={this.props.classes.left} label="W AND OP Number" />

                    </Tab>
                    <Tab label="Service History">
                        <ArrayField source="Current_Service">
                        <Datagrid>
                                <SelectField choices={data.sector} source="service_sector" label="Sector" />
                                <SelectField choices={data.service_mode} source="service_mode" label="Mode of Service" />
                                <ReferenceField source="work_place_id" label="Working Place" reference="workplace" linkType={false} >
                                    <TextField source="work_place" />
                                </ReferenceField>
                                <DateField source="appoint_date" label="Date of Appoitment" />
                                <DateField source="duty_date" label="First Date attend for the Duty" />
                                <PlacementButton />
                                </Datagrid>
                        </ArrayField>
                    </Tab>
                    <Tab label="Qualifications">
                        <ArrayField source="Qualifications">
                            <Datagrid>
                                <SelectField choices={data.qualification_type}  source="qualification_type_id"  label="Qualification Type" />
                                <SelectField choices={data.qualification}  source="qualification_id" label="Sector"  label="Qualification" />
                                <DateField source="qualified_date" label="Qualified Date" />
                                <TextField source="qualification_grade" label="Grade" />
                                <TextField source="qualified_institute" label="Institute" />
                                <ImageField source="certificate_path" label="Certification" />
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    <Tab label="Family Details">
                         <ArrayField source="Spouse_Details" >
                         <Datagrid>
                        <TextField source="in_name" label="Full name with initials" />
                        <TextField source="si_in_name"  label="Full name with initials In Sinhala" />
                        <TextField source="ta_in_name"  label="Full name with initials In Tamil" />
                        <TextField source="f_name" label="First name" />
                        <TextField source="nic" label="NIC" />
                        <SelectField source="gender" choices={data.gender} label="Gender" />
                        <SelectField source="ethinicity" choices={data.ethinicity} label="Ethnicity" />
                        <DateField source="dob"  label="Date of Birth" />
                        </Datagrid>
                        </ArrayField>
                        <ArrayField source="Children_Details" >
                            <Datagrid>
                                <TextField source="name" label="Name of the Child" />
                                <SelectField className={this.props.classes.left} choices={data.gender} source="gender" label="Gender" />
                                <TextField source="dob" label="Date of Birth" />
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    {this.permissions === 'admin' && (
                        <Tab label="user.form.security" path="security">
                            <TextField source="role" />
                        </Tab>
                    )}
                </TabbedShowLayout>
            </Show>
        )
    }
}


EmployeeShow.propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    permissions: PropTypes.string,
};

export default withStyles(styles)(EmployeeShow);
