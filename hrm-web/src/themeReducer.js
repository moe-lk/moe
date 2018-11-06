import { CHANGE_THEME } from './configuration/actions';

export default (previousState = 'light', { type, payload }) => {
    if (type === CHANGE_THEME) {
        return payload;
    }
    if(type == '@@redux-form/CHANGE'){
        return payload;
    }
    return previousState;
};
