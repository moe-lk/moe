import simpleRestProvider from 'ra-data-json-server';
import AuthService from '../authService';
import { fetchUtils } from 'react-admin';
import addUploadCapabilities from './uploader';


const httpClient = (url, options = {}) => {
    console.log('requesting');
    this.Auth = new AuthService();
    options.user = {
        authenticated: true,
        token: this.Auth.getToken()
    }
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://localhost/v2', httpClient);
const uploadCapableClient = addUploadCapabilities(dataProvider);


// const restProvider = simpleRestProvider('http://localhost/v2', httpClient);
export default dataProvider;