import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';

class PSCLetterNo extends Component {


    state = {
        placement: {
            off_letter_no: 'PSC Letter No'
            
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
    Component: PSCLetterNo,
    isInlineable: true,
    name: 'example/content/PSCLetterNo',
    version: '0.0.1',
    text: 'PSC Letter No',
    description: 'PSC Letter No of placement'
}
