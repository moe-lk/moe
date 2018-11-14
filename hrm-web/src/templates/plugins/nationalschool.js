
import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';

class NationalSchool extends Component {


    state = {
        employee: {
            Personal_Details: {
                in_name: 'Name in English'
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
            employee ? employee.Personal_Details.in_name : ''
        )
    }


}


export default {
    Component: NameInEnglish,
    isInlineable: true,
    IconComponent: <PeopleIcon />,
    name: 'example/content/NameInEnglish',
    version: '0.0.1',
    text: 'Name in English',
    description: 'Name of the Employee in English'
}
