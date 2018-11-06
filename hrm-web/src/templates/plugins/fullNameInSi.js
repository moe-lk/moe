import PeopleIcon from '@material-ui/icons/People';
import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';

class NameInSinhala extends Component {


    state = {
        employee: {
            Personal_Details: {
                si_in_name: 'Name in Sinhala'
            }
        }
    };

    componentWillReceiveProps() {

        var employee = localStorage.getItem('employee');
        console.log(employee);
        if (employee !== undefined) {
            this.state.employee = cloneDeep(JSON.parse(employee));
        }
    }

    render() {
        const {
            employee
        } = this.state;
        return (
            employee ? employee.Personal_Details.si_in_name : ''
        )
    }


}

export default {
    Component: NameInSinhala,
    isInlineable: true,
    IconComponent: <PeopleIcon />,
    name: 'example/content/NameInSinhala',
    version: '0.0.1',
    text: 'Name in Sinhala',
    description: 'Name of the Employee in Sinhala'
  }
  