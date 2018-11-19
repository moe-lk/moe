import './App.css';
import 'babel-polyfill';

import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import authProvider from './authProvider';
import { Dashboard } from './dashboard';
import dataProvider from './dataProvider';
import Employee from './employees';
import englishMessages from './i18n/en';
import Layout from './Layout';
import Menu from './Menu';
import Placement from './placement';
import customRoutes from './route';
import TemplateBuilder from './templates';
import themeReducer from './themeReducer';


const i18nProvider = locale => {
    if (locale === 'si') {
        return import('./i18n/si').then(messages => messages.default);
    }
    if (locale === 'ta') {
        return import('./i18n/ta').then(messages => messages.default);
    }
    // Always fallback on english
    return englishMessages;
};
// 
class App extends Component {

    componentDidMount() {
        // this.setState({ dataProvider });
    }
    componentWillReceiveProps() {
        console.log(this.props)
    }


    render() {
        if (!dataProvider) {
            return (
                <div className="loader-container">
                    <div className="loader">Loading...</div>
                </div>
            );
        }

        return (
            <Admin
                authProvider={authProvider}
                dataProvider={dataProvider}
                i18nProvider={i18nProvider}
                // theme={theme}
                customReducers={{ theme: themeReducer }}
                dashboard={Dashboard}
                // appBar={Menu}
                appLayout={Layout}
                menu={Menu}
                title="CS-HRM"
                locale="en"

                // customReducers={{ tree }}
                customRoutes={customRoutes}
            >
                {/* {permissions => [
                    permissions ? <Resource name="employees"  {...Employee} /> : null,
                    permissions ? <Resource name="placement"  {...Placement} /> : null,
                    permissions ? <Resource   {...Placement} /> : null,
                    <Resource name="workplace" />,
                    <Resource name="worklocation" />,
                    <Resource name="workbranch" />,
                    <Resource name="qualification" />,
                    <Resource name="designation" />,
                    <Resource name="province" />,
                    <Resource name="options" />,
                    <Resource name="upload" />,
                    // permissions ? <Resource name="employees"  {...Dashboard} /> : null
                    <Resource name="templates" {...TemplateBuilder} /> */
                
                }
                    <Resource name="employees"  {...Employee} /> 
                    <Resource name="placement"  {...Placement} /> 
                    <Resource name="workplace" />
                    <Resource name="worklocation" />
                    <Resource name="workbranch" />
                    <Resource name="qualification" />
                    <Resource name="designation" />
                    <Resource name="province" />
                    <Resource name="options" />
                    <Resource name="upload" />
                    <Resource name="templates" {...TemplateBuilder} />
                
            </Admin>
        )

    }


}

export default App;
