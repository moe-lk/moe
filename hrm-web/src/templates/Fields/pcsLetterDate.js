import React, { Component } from 'react';
import {
    DateInput
} from 'react-admin';
import {Typography, ButtonBase } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';


const onRemove = (remove) => {
    console.log(remove);
    return (e) => {
        console.log(e.target)
        e.target =''
        // Dispatch the onChange action with the new value
        
    }
}

class PCSLetterDate extends Component {

    state = {
        pcs_letter_date: Date()
    };

    render() {
        return (
            <Typography >
                {this.state.pcs_letter_date ? this.state.pcs_letter_date : <DateInput source={this.state.pcs_letter_date} ></DateInput>}
                {this.state.pcs_letter_date ? <small><ButtonBase onClick={onRemove(this.state)}><RemoveIcon></RemoveIcon></ButtonBase></small> : ''}
            </Typography >
        )
    }


}

export default (PCSLetterDate);
