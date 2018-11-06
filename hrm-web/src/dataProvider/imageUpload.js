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

export const UPLOAD = 'UPLOAD_FILE';

export const upload = (id, data, basePath) => ({
    type: UPLOAD,
    payload: { id, data: { ...data}, basePath },
    meta: {
        resource: 'upload',
        fetch: UPDATE,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
        },
        onSuccess: {
            notification: {
                body: 'Image uploaded successfully',
                level: 'info',
            },
        },
        onFailure: {
            notification: {
                body: 'Image Upload failed',
                level: 'warning',
            },
        },
    },
});