import React, { Component } from 'react';
import data from '../../data'
import Institute from '@material-ui/icons/LooksOne'

class SchoolDistrict extends Component {


    state = {
        schools: 'School district'
        
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
            return data.id == school_data.district
        })
    }

    render() {
        const {
            school
        } = this.state;
        return (
            school ? this.filterPlaces(data.district_list)[0].district : ''
        )
    }


}


export default {
    Component: SchoolDistrict,
    isInlineable: true,
    IconComponent: <Institute />,
    name: 'plugin/content/SchoolDistrict',
    version: '0.0.1',
    text: 'School district',
    description: 'School district'
}
