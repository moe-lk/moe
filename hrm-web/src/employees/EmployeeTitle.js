/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import React from 'react';
import { translate } from 'react-admin';


/* eslint react/jsx-key: off */
const EmployeeTitle = translate(({ record, translate }) => (
    <span>
       {record.Summery ? record.Summery.in_name :''}
    </span>
));

export default EmployeeTitle;
