import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';
import data from './../../data';
import { func } from 'prop-types';
class Designation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placement: {
                designation_id: 'Designation',
                service_sector: 'Service Sector'
            }
        };
    }
    componentWillMount() {
        console.log(this);
        var placement = localStorage.getItem('placement');
        console.log(placement);
        if (placement !== null) {
            this.state.placement = cloneDeep(JSON.parse(placement));
        }
    }
    filterPlaces(sectorData) {
        return sectorData.filter(function (data) {
            var placement = localStorage.getItem('placement');
            return data.id = JSON.parse(placement).id
        })
    }
    renderSwitch(service_sector) {
        console.log(service_sector);
        switch (service_sector) {
            case 'sleas':
                return this.filterPlaces(data.designations.sleas)[0].name
            case 'sltes':
                return this.filterPlaces(data.designations.sltes)[0].name
            case 'cs':
                return this.filterPlaces(data.designations.cs)[0].name
            case 'slps':
                return this.filterPlaces(data.designations.slps)[0].name
            case 'slts':
                return this.filterPlaces(data.designations.slts)[0].name
            case 'ncs':
                return this.filterPlaces(data.designations.ncs)[0].name
            default:
                return 'Service Sector Invalid';
        }
    }
    render() {
        return (
            typeof (this.state.placement.designation_id) == 'number' ? this.renderSwitch(this.state.placement.service_sector) : this.state.placement.designation_id
        )
    }
}
export default {
    Component: Designation,
    isInlineable: true,
    name: 'example/content/Designation',
    version: '0.0.1',
    text: 'Designation',
    description: 'Designation'
}