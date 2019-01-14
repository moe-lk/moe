import React, { Component } from 'react';
import data from '../../data'
import Institute from '@material-ui/icons/LooksOne'
import { GET_ONE }  from 'react-admin';

class SchoolProvince extends Component {


    state = {
        schools: 'School Province'
        
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
            return data.id == school_data.province
        })
    }

    render() {
        const {
            school
        } = this.state;
        return (
            school ? this.filterPlaces(data.province_list)[0].province : ''
        )
    }


}


export default {
    Component: SchoolProvince,
    isInlineable: true,
    IconComponent: <Institute />,
    name: 'plugin/content/NationalSchool',
    version: '0.0.1',
    text: 'School Province',
    description: 'School Province'
}
