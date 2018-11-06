import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/People';

import Footer from '../../Lables/footer'


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
    Footer.length < 1 ? resolve() : reject()
  )


 export default {
    Component: Footer,
    IconComponent: <PeopleIcon />,
    name: 'example/content/Footer',
    version: '0.0.1',
    text: 'Footer',
    description: 'Footer  Lable',
    handleRemoveHotKey:handleRemoveHotKey
  }
  