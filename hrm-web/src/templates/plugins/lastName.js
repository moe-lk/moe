import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/People';

import LastName from '../Fields/lastName'


 export default {
    Component: LastName,
    IconComponent: <PeopleIcon />,
    isInlineable: true,
    isBlockable: true,
    allowInlineNeighbours: true,
    object:'node',
    name: 'example/content/LastName',
    version: '0.0.2',
    text: 'Last Name',
    description: 'Last Name of the Employee',
  
  }
  