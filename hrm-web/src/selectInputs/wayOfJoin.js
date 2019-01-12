/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import { withStyles } from '@material-ui/core/styles';
import { DependentInput } from 'aor-dependent-input';
import cloneDeep from 'clone-deep';
import React, { Component } from 'react';
import { required, SelectInput } from 'react-admin';

import data from '../data';


const styles = theme => ({
    left: { display: 'inline-block' },
})

const initialState = {
    way_of_join: cloneDeep(data.way_of_join)
}

class WayOfJoinSelectInput extends Component {

    constructor(props) {
        super(props);
        this.initialState = initialState;
        this.state = this.initialState;

    }

    reset() {
        this.state = cloneDeep(initialState)
    }

    componentDidUpdate(presProp, prevState) {
        this.reset();
    }

    switchSector = (props) => {
        if (props !== undefined && Object.keys(props).length > 0) {
            var value = props.service_sector;
            if (props.General_Service != undefined && props.General_Service.service_sector != undefined) {
                value = props.General_Service.service_sector;
            }
            switch (value) {
                case 'sleas':
                    this.state.way_of_join.splice(4, 3)
                    break;
                case 'sltes':
                    this.state.way_of_join.splice(2, 1)
                    this.state.way_of_join.splice(3, 3)
                    break;
                case 'slts':
                    this.state.way_of_join.splice(0, 5)
                    break;
                case 'slps':
                    this.state.way_of_join.splice(0, 1)
                    this.state.way_of_join.splice(1, 1)
                    this.state.way_of_join.splice(2, 3)
                    break;
                case 'cs':
                    this.state.way_of_join.splice(4, 3)
                    break;
                case 'non-cs':
                    this.state.way_of_join.splice(2, 2)
                    break;
                case 'all_is':
                    this.state.way_of_join.splice(4, 3)
                    break;
                default:
                    break;
            }
        }

        return true;

    };

    render() {
        return (
            <DependentInput resolve={this.switchSector}>
                <SelectInput
                    source="General_Service.way_join"
                    label="Way of Join"
                    validate={required()}
                    onChange={this.reset()}
                    formClassName={this.props.classes.left}
                    choices={this.state.way_of_join}
                />
            </DependentInput>
        )
    }
}

export default withStyles(styles)(WayOfJoinSelectInput);