import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';
import data from './../../data';

class Workingbranch extends Component {

    state = {
        placement: {
            work_branch_id: 'Working Branch',
          
            
        }
    };

    componentWillReceiveProps() {
        console.log(this);
        var placement = localStorage.getItem('placement');
        console.log(placement);
        if (placement !== undefined) {
            this.state.placement = cloneDeep(JSON.parse(placement));
        }
    }

    filterPlaces(sectorData) {
        return sectorData.filter(function (data) {
            var placement = localStorage.getItem('placement');
            return data.id == JSON.parse(placement).work_branch_id
        })
    }

    render() {
        const {
            placement
        } = this.state;
        return (
            typeof (this.state.placement.work_branch_id) == 'number' ? (this.filterPlaces(data.working_branches)[0].office_branch) : this.state.placement.work_branch_id

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
