import React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './configuration/Configuration';
import PlacementCreate from './placement/ServicesCreate';

export default [
    <Route exact path="/configuration" component={Configuration} />,
    <Route exact path="/promotion" component={PlacementCreate} />,
];