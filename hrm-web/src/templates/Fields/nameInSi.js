import cloneDeep from 'clone-deep';
import React, { Component } from 'react';

class NameInSinhala extends Component {


    state = {
        employee: {
            Personal_Details: {
                l_name: 'Name in Sinhala'
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
    resize: actions.resize,
    isInlineable: true,
    isBlockable: true,
    allowInlineNeighbours: false,
    object: 'nodes',
    type: 'paragraph',
    IconComponent: <PeopleIcon />,
    name: 'example/content/NameInSi',
    version: '0.0.1',
    text: 'Name in Sinhala',
    description: 'Name of the Employee in Sinhala',
    handleRemoveHotKey:handleRemoveHotKey,
  }
  