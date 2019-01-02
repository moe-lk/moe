import PeopleIcon from '@material-ui/icons/People';
import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';

class NIC_No extends Component {


    state = {
        employee: {
            Personal_Details: {
                NIC: 'NIC no'
            }
        }
    };

    componentWillReceiveProps() {
        console.log(this);
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
            employee ? employee.Personal_Details.NIC : ''
        )
    }


}


export default {
    Component: NIC_No,
    isInlineable: true,
    IconComponent: <PeopleIcon />,
    name: 'example/content/NIC_No',
    version: '0.0.1',
    text: 'NIC No',
    description: 'National identity Card Number '
}
