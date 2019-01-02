import React, { Component } from 'react';
import data from '../../data'
import Institute from '@material-ui/icons/LooksOne'

class SchoolZone extends Component {


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
            return data.zone_id == school_data.zone
        })
    }

    render() {
        const {
            school
        } = this.state;
        return (
            school ? this.filterPlaces(data.zone_list)[0].zone : ''
        )
    }


}


export default {
    Component: SchoolZone,
    isInlineable: true,
    IconComponent: <Institute />,
    name: 'plugin/content/SchoolZone',
    version: '0.0.1',
    text: 'School Zone',
    description: 'School Zone'
}
