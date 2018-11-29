import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/LooksOne';import { InputLabel } from '@material-ui/core';


class RespectLetterNoLable extends Component {

    render() {
        return (
            <InputLabel>Respect Letter No </InputLabel>
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
    RespectLetterNoLable.length < 1 ? resolve() : reject()
  )


 export default {
    Component: RespectLetterNoLable,
    IconComponent: <PeopleIcon />,
    isInlineable: true,
    name: 'example/content/respectLetterNo',
    version: '0.0.1',
    text: 'Respect Letter Officer No ',
    description: 'respect letter officer no label',
    handleRemoveHotKey:handleRemoveHotKey
  }
  