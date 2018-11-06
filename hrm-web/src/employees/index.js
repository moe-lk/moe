/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */
import EmployeeIcon from '@material-ui/icons/People';

import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import EmployeeList from './EmployeeList';
import EmployeeShow from './EmployeeShow';



export default {
    list: EmployeeList,
    create: EmployeeCreate,
    edit: EmployeeEdit,
    show: EmployeeShow,
    icon: EmployeeIcon,
};





