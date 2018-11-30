import PeopleIcon from '@material-ui/icons/People';
import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';

class NameTitle extends Component {


    state = {
        employee: {
            Personal_Details: {
                title: 'NIC no'
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
            employee ? employee.Personal_Details.title : ''
        )
    }


}


export default {
    Component: NameTitle,
    isInlineable: true,
    IconComponent: <PeopleIcon />,
    name: 'example/content/NameTitle',
    version: '0.0.1',
    text: 'Name Title',
    description: 'Name Title '
}
