import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/People';

import FirstName from '../../Lables/firstName'


const handleRemoveHotKey = (
  _: KeyboardEvent,
  {
    content: {
      state: { editorState }
    }
  }: Props
) =>
  new Promise(
    (resolve: Function, reject: Function) =>
    FirstName.length < 1 ? resolve() : reject()
  )


 export default {
    Component: FirstName,
    IconComponent: <PeopleIcon />,
    isInlineable: true,
    name: 'example/content/FirstName',
    version: '0.0.1',
    text: 'First Name',
    description: 'First Name Lable',
    handleRemoveHotKey:handleRemoveHotKey
  }
  