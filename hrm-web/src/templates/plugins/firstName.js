import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/People';
import FirstName from '../Fields/firstName'
import { actions } from 'ory-editor-core/lib/actions';
import * as hooks from './ory-slate/src/hooks'


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

  const createNode = (type: string, el: any, next: any) => ({
    object: 'block',
    type,
    // data: Data.create({ style: el.attribs.style }),
    nodes: next(el.childNodes)
  })


 export default {
    Component: FirstName,
    resize: actions.resize,
    isInlineable: true,
    isBlockable: true,
    allowInlineNeighbours: false,
    object: 'nodes',
    type: 'paragraph',
    IconComponent: <PeopleIcon />,
    name: 'example/layout/first-name',
    version: '0.0.1',
    text: 'First Name',
    description: 'First Name of the Employee',
    handleRemoveHotKey:handleRemoveHotKey,
  }
  