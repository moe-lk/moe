import decode from 'jwt-decode';
export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'https://api.moe.gov.com/v2/user' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }


    login(username, password) {
        console.log(username, password)
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/authorize`, {
            method: 'POST',
            headers:{
                'Authorization': 'Basic UlhFTHR6Ulh1cnNzYjlnTUVkT09XWnc4Z0dvYTp0ejBUcDhXbUdmeG1mRHpPbm9MZzJvRUlDX2Nh'
            },
            body: {
                username:username,
                password:password,
                grant_type:'password'
            }
        }).then(res => {
            
            localStorage.setItem('username', username);
            localStorage.setItem('level', res.user.level);
            localStorage.setItem('user', res.user);
            console.log(res);
            // accept all username/password combinations
            // return Promise.resolve();
            this.setToken(res.token) // Setting the token in localStorage
            return Promise.resolve(res);
        })
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        return Promise.resolve();


    }

    getProfile() {

        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }


    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Authorization': 'Basic UlhFTHR6Ulh1cnNzYjlnTUVkT09XWnc4Z0dvYTp0ejBUcDhXbUdmeG1mRHpPbm9MZzJvRUlDX2Nh',
            'Content-Type':'application/x-www-form-urlencoded',
            'Access-Control-Expose-Headers':'Authorization,Content-Length,Content-Range,X-Total-Count',
            'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}