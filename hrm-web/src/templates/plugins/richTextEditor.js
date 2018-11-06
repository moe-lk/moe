import React, { Component } from 'react';
import TextFields from '@material-ui/icons/TextFields';

import RichTextEditor from '../Fields/richTextEditor'
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
      RichTextEditor.length < 1 ? resolve() : reject()
    )

 export default {
    Component: RichTextEditor,
    IconComponent: <TextFields />,
    name: 'example/content/TextFields',
    version: '0.0.1',
    text: 'Rich Text Editor',
    handleRemoveHotKey:handleRemoveHotKey
  }
  