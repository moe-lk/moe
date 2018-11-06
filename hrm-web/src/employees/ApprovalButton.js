/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';
import Check from '@material-ui/icons/CheckCircle';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Approve as ApproveAction, Reject as RejectAction } from './ApprovalActions';


class ApproveButton extends Component {
    componentDidMount(){
        console.log(this);
    }
    handleApprove = () => {
        const { Approve, record } = this.props;
        console.log(record);
        record.Personal_Details.approved = 1
        Approve(record.id, record);
    };

    handleReject = () => {
        const { Reject, record } = this.props;
        record.Personal_Details.approved = 2
        Reject(record.id, record);
    };

    render() {
        const { record } = this.props;
        return (
            <span>
                <IconButton onClick={this.handleApprove}>
                    <Check />
                </IconButton>
                <IconButton onClick={this.handleReject}>
                    <Cancel />
                </IconButton>
            </span>
        );
    }
}

ApproveButton.propTypes = {
    classes: PropTypes.object,
    record: PropTypes.object,
    Approve: PropTypes.func,
    Reject: PropTypes.func,
};

export default connect(
    null,
    {
        Approve: ApproveAction,
        Reject: RejectAction,
    }
)(ApproveButton);