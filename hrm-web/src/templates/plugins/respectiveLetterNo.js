import PeopleIcon from '@material-ui/icons/People';
import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';

class RespectiveLetterNo extends Component {

    state = {
        placement: {
            off_letter_no: 'Respective Officer Letter No'
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
            placement ? placement.off_letter_no : ''
        )
    }

}
export default {
    Component: RespectiveLetterNo,
    isInlineable: true,
    IconComponent: <PeopleIcon />,
    name: 'example/content/respectiveLetterNo',
    version: '0.0.1',
    text: 'Respective Officer Letter No',
    description: 'Respective Officer Letter No'
}
