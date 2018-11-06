import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/People';import { InputLabel } from '@material-ui/core';


class LastNameLable extends Component {

    render() {
        return (
            <InputLabel>Last Name</InputLabel>
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
    LastNameLable.length < 1 ? resolve() : reject()
  )


 export default {
    Component: LastNameLable,
    IconComponent: <PeopleIcon />,
    isInlineable: true,
    name: 'example/content/LastName',
    version: '0.0.1',
    text: 'Last Name',
    description: 'Last Name Label',
    handleRemoveHotKey:handleRemoveHotKey
  }
  