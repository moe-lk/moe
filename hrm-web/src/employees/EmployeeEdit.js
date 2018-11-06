/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Edit, FormTab, SaveButton, TabbedForm, Toolbar } from 'react-admin';


import AccountSettings from './AccountSettings';
import ApprovalButton from './ApprovalButton';
import ContactDetails from './ContactDetails';
import EmployeeTitle from './EmployeeTitle';
import FamilyInfoForm from './FamilyInfoForm';
import GeneralService from './GeneralService';
import PersonalDetails from './PersonalDetails';
import Qualification from './Qualification';


/* eslint react/jsx-key: off */

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    left: { display: 'inline-block', marginRight: 36 },
    right: { display: 'inline-block', marginRight: 36 },
    qualification: { display: 'inline-block', marginRight: 36 },
    qualification_type: { display: 'inline-block', marginRight: 36 },
    ethinicity: { display: 'inline-block', marginRight: 36 },
    gender: { display: 'inline-block', marginRight: 36 },
    civil_status: { display: 'inline-block', marginRight: 36 },
    email: { width: 544 },
    fullLenght: { wid: 380 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});



const EmployeeEditToolbar = ({ permissions, ...props }) => (
    <Toolbar {...props}>
        <SaveButton
            label="Save and View"
            redirect="show"
            submitOnEnter={true}
        />
        <SaveButton
            label="Save And Add"
            redirect={false}
            submitOnEnter={true}
            variant="flat"
        />

        <ApprovalButton {...props} />
    </Toolbar>
);

class EmployeeEdit extends Component {

    constructor(props) {
        super(props);
        this.props.location.state ?
            this.state = {
                familyTab: this.props.location.state.civil_status
            } :
            this.state = {
                familyTab: 2
            }
    }
    
    render() {
        return (
            <Edit title={<EmployeeTitle />} {...this.props}>
                <TabbedForm toolbar={<EmployeeEditToolbar permissions={this.permissions} />}>
                    <FormTab label="Personal Details" autoComplete="off" path="">
                      <PersonalDetails></PersonalDetails>
                    </FormTab>
                    <FormTab label="Contact Details" autoComplete="off" path="">
                      <ContactDetails></ContactDetails>
                    </FormTab>
                    <FormTab label="General Service Details" autoComplete="off" path="">
                       <GeneralService></GeneralService>
                    </FormTab>
                    <FormTab label="Qualifications" autoComplete="off" path="">
                       <Qualification {...this.props}></Qualification>
                    </FormTab>
                    <FormTab label="User Account Details" autoComplete="off" path="">
                        <AccountSettings></AccountSettings>
                    </FormTab>
                    <FormTab label="Family Details" disabled={this.state.familyTab < 2} autoComplete="off" path="" >
                        <FamilyInfoForm>
                        </FamilyInfoForm>
                    </FormTab>
                </TabbedForm>
            </Edit>
        )
    }
}

EmployeeEdit.propTypes = {
    id: PropTypes.any.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    permissions: PropTypes.string,
};

export default withStyles(styles)(EmployeeEdit);
