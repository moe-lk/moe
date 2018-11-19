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

    render() {
        const {
            placement
        } = this.state;
        return (
            data.working_branches[this.state.placement.work_branch_id].office_branch
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
