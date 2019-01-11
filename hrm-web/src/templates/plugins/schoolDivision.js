import React, { Component } from 'react';
import data from '../../data'
import Institute from '@material-ui/icons/LooksOne'

class SchoolDivision extends Component {


    state = {
        schools: 'School Division'
        
    };

    componentWillReceiveProps() {
        var placement = localStorage.getItem('placement');
        this.setState({
            school:JSON.parse(placement).school_data
        });
    }

    filterPlaces(sectorData) {
        return sectorData.filter(function (data) {
            var placement = localStorage.getItem('placement');
            let school = JSON.parse(placement).school_data
            let school_data = JSON.parse(school);
            return data.div_id == school_data.division
        })
    }

    render() {
        const {
            school
        } = this.state;
        return (
            school ? this.filterPlaces(data.division_list)[0].division_name : ''
        )
    }


}


export default {
    Component: SchoolDivision,
    isInlineable: true,
    IconComponent: <Institute />,
    name: 'plugin/content/SchoolDivision',
    version: '0.0.1',
    text: 'School Division',
    description: 'School Division'
}
