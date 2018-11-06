import cloneDeep from 'clone-deep';
import React, { Component } from 'react';

class LastName extends Component {


    state = {
        employee: {
            Personal_Details: {
                l_name: 'Last Name'
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
            employee ? employee.Personal_Details.l_name : ''
        )
    }


}

export default (LastName);
