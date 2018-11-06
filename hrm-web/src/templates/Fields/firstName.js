//'../Fields/firstName'
import cloneDeep from 'clone-deep';
import React, { Component } from 'react';

const styles = theme => ({
    first_name: { 'margin': 'auto' }
})
class FirstName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: {
                Personal_Details: {
                    f_name: 'First Name'
                }
            }
        }
    };

    componentWillReceiveProps() {
        var employee = localStorage.getItem('employee');
        if (employee !== undefined) {
            this.state.employee = cloneDeep(JSON.parse(employee));
        }
    }

    render() {
        const { employee } = this.state
        return (
            employee ? employee.Personal_Details.f_name : ''
        )
    }

}

export default (FirstName);
