/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import React, { Component } from 'react';
import { Create, FormTab, SaveButton, TabbedForm, Toolbar } from 'react-admin';

import AccountSettings from './AccountSettings';
import ContactDetails from './ContactDetails';
import FamilyInfoForm from './FamilyInfoForm';
import GeneralService from './GeneralService';
import PersonalDetails from './PersonalDetails';
import Qualification from './Qualification';

/* eslint react/jsx-key: off */

const EmployeeEditToolbar = ({ permissions, ...props }) => (
    <Toolbar {...props}>
        <SaveButton
            label="Save and View"
            redirect="show"
            submitOnEnter={true}
        />
        {permissions === 'admin' && (
            <SaveButton
                label="Save And Add"
                redirect={false}
                submitOnEnter={false}
                variant="flat"
            />
        )}
    </Toolbar>
);

class EmployeeCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            familyTab: 2
        }
    }

    render() {
        return (
            <Create {...this.props}>
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
                        <Qualification></Qualification>
                    </FormTab>
                    <FormTab label="Family Details" disabled={this.state.familyTab < 2} autoComplete="off" path="" >
                        <FamilyInfoForm>
                        </FamilyInfoForm>
                    </FormTab>
                    <FormTab label="User Account Details" autoComplete="off" path="">
                        <AccountSettings></AccountSettings>
                    </FormTab>
                </TabbedForm>
            </Create>

        )
    }
}



export default (EmployeeCreate);
