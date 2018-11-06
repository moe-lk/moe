import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/People';

import Header from '../../Lables/header'


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
    Header.length < 1 ? resolve() : reject()
  )


 export default {
    Component: Header,
    IconComponent: <PeopleIcon />,
    name: 'example/content/Header',
    version: '0.0.1',
    text: 'Header',
    description: 'Header  Lable',
    handleRemoveHotKey:handleRemoveHotKey
  }
  