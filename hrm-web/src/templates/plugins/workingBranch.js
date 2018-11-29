import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';
import data from '../../data';
import { func } from 'prop-types';
class Workingbranch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placement: {
                work_branch_id: 'Work Branch',
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
    
    render() {
        return (
             this.filterPlaces(data.working_branches)[0].office_branch
        )
    }
}
export default {
    Component: Workingbranch,
    isInlineable: true,
    name: 'example/content/Workingbranch',
    version: '0.0.1',
    text: 'Working Branch',
    description: 'Working Branch'
}