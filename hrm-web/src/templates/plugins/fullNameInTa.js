import PeopleIcon from '@material-ui/icons/People';
import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';

class NameInTamil extends Component {


    state = {
        employee: {
            Personal_Details: {
                ta_in_name: 'Name in Tamil'
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
            employee ? employee.Personal_Details.ta_in_name : ''
        )
    }


}

export default {
    Component: NameInTamil,
    resize: actions.resize,
    isInlineable: true,
    allowInlineNeighbours:true,
    IconComponent: <PeopleIcon />,
    name: 'example/content/NameInTamil',
    version: '0.0.1',
    text: 'Name in Tamil',
    description: 'Name of the Employee in Tamil'
  }
  