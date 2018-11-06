import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/LooksOne';import { InputLabel } from '@material-ui/core';


class NameInTaLable extends Component {

    render() {
        return (
            <InputLabel>Name in Tamil</InputLabel>
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
    NameInTaLable.length < 1 ? resolve() : reject()
  )


 export default {
    Component: NameInTaLable,
    IconComponent: <PeopleIcon />,
    isInlineable: true,
    name: 'example/content/NameInTaLable',
    version: '0.0.1',
    text: 'Name in Tamil',
    description: 'FullName of the Employee in Tamil label',
    handleRemoveHotKey:handleRemoveHotKey
  }
  