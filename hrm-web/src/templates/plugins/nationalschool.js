import React, { Component } from 'react';
import dataProvider from '../../dataProvider';
import Institute from '@material-ui/icons/Place'
import { GET_ONE }  from 'react-admin';

class NationalSchool extends Component {


    state = {
        schools: 'School Name'
        
    };

    componentWillReceiveProps() {
        var placement = localStorage.getItem('placement');
        let school_data = JSON.parse(placement).school_data
        console.log(school_data)
        if(school_data != null){
            dataProvider(GET_ONE, 'schools', { id:school_data.institute_id })
            .then(response => response.data)
            .then(school => {
                this.setState({
                    school: school
                })
            })
        }
    }

    render() {
        const {
            school
        } = this.state;
        return (
            school ? school.institute_name : ''
        )
    }


}


export default {
    Component: NationalSchool,
    isInlineable: true,
    IconComponent: <Institute />,
    name: 'plugin/content/NationalSchool',
    version: '0.0.1',
    text: 'National School',
    description: 'National School'
}
