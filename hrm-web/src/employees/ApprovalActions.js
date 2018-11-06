/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import { UPDATE } from 'react-admin';


export const EMPLOYEE_APPROVE = 'EMPLOYEE_APPROVE';
export const EMPLOYEE_APPROVE_LOADING = 'EMPLOYEE_APPROVE_LOADING';
export const EMPLOYEE_APPROVE_FAILURE = 'EMPLOYEE_APPROVE_FAILURE';
export const EMPLOYEE_APPROVE_SUCCESS = 'EMPLOYEE_APPROVE_SUCCESS';

export const Approve = (id, data, basePath) => ({
    type: EMPLOYEE_APPROVE,
    payload: { id, data: { ...data, status: 'accepted' }, basePath },
    meta: {
        resource: 'employees',
        fetch: UPDATE,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
        },
        onSuccess: {
            notification: {
                body: 'resources.reviews.notification.approved_success',
                level: 'info',
            },
            redirectTo: '/employees',
            basePath,
        },
        onFailure: {
            notification: {
                body: 'resources.reviews.notification.approved_error',
                level: 'warning',
            },
        },
    },
});

export const EMPLOYEE_REJECT = 'EMPLOYEE_REJECT';
export const EMPLOYEE_REJECT_LOADING = 'EMPLOYEE_REJECT_LOADING';
export const EMPLOYEE_REJECT_FAILURE = 'EMPLOYEE_REJECT_FAILURE';
export const EMPLOYEE_REJECT_SUCCESS = 'EMPLOYEE_REJECT_SUCCESS';

export const Reject = (id, data, basePath) => ({
    type: EMPLOYEE_REJECT,
    payload: { id, data: { ...data, status: 'rejected' }, basePath },
    meta: {
        resource: 'employees',
        fetch: UPDATE,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
        },
        onSuccess: {
            notification: {
                body: 'resources.reviews.notification.rejected_success',
                level: 'info',
            },
            redirectTo: '/employees',
            basePath,
        },
        onFailure: {
            notification: {
                body: 'resources.reviews.notification.rejected_error',
                level: 'warning',
            },
        },
    },
});