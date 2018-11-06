import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/LooksOne';import { InputLabel } from '@material-ui/core';


class NameInSinhalaLable extends Component {

    render() {
        return (
            <InputLabel>Name in Sinhala</InputLabel>
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
    NameInSinhalaLable.length < 1 ? resolve() : reject()
  )


 export default {
    Component: NameInSinhalaLable,
    IconComponent: <PeopleIcon />,
    isInlineable: true,
    name: 'example/content/nameSinhala',
    version: '0.0.1',
    text: 'Name in Sinhala',
    description: 'Name of the Employee in Sinhala label',
    handleRemoveHotKey:handleRemoveHotKey
  }
  