import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/LooksOne';import { InputLabel } from '@material-ui/core';


class NameInEnLable extends Component {

    render() {
        return (
            <InputLabel>Name in English</InputLabel>
        )
    }


}
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
    NameInEnLable.length < 1 ? resolve() : reject()
  )


 export default {
    Component: NameInEnLable,
    IconComponent: <PeopleIcon />,
    isInlineable: true,
    name: 'example/content/nameEN',
    version: '0.0.1',
    text: 'Name in English',
    description: 'FullName of the employee in English label',
    handleRemoveHotKey:handleRemoveHotKey
  }
  