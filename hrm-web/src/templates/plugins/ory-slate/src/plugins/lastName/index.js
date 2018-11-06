/*
import Plugin from '../Plugin';

import React from 'react';
import { Data, Value } from 'slate';

import Plugin from '../Plugin';
import users from './users.json';

This example is intended to be a super basic mentions implementation that
people can work off of. What is show here is how to detect when a user starts
typing a mention, making a search query, and then inserting a mention when
the user selects an item. There are a few improvements that can be made in a
production implementation:

1. Serialization - in an actual implementation, you will probably want to
   serialize the mentions out in a manner that your DB can parse, in order
   to send notifications on the back end.
2. Linkifying the mentions - There isn't really a good place to link to for
   this example. But in most cases you would probably want to link to the
   user's profile on click.
3. Keyboard accessibility - it adds quite a bit of complexity to the
   implementation to add this, as it involves capturing keyboard events like up
   / down / enter and proxying them into the `Suggestions` component using a
   `ref`. I've left this out because this is already a pretty confusing use
   case.
4. Plugin Mentions - in reality, you will probably want to put mentions into a
   plugin, and make them configurable to support more than one kind of mention,
   like users and hashtags. As you can see below it is a bit unweildy to bolt
   all this directly to the editor.

The list of characters was extracted from Wikipedia:
https://en.wikipedia.org/wiki/List_of_Star_Wars_characters
*/

import React from 'react'
import type  { Props } from '../props'
import Plugin from '../Plugin'
import { makeTagNode, BarButton } from '../../helpers';
import { Value, Data } from 'slate'
import EmbaedData from './node'

export const E1 = 'Employee/first-name'
export const E2 = 'Employee/last-name'
export const E3 = 'Employee/full-name'
export const E4 = 'Employee/address-line-1'
export const E5 = 'Employee/address-line-2'
export const E6 = 'Employee/address-line-3'
export const P = 'PARAGRAPH/PARAGRAPH'

const createNode = (type: string, el: any, next: any) => ({
  object: 'block',
  type,
  data: {
    userId: 'Last Name',
    username: 'ID',
  },
  // data: Data.create({ style: el.attribs.style }),
  nodes: [
    {
      object: 'text',
      leaves: [
        {
          text: 'Last Name',
        },
      ],
    },
  ],
})

export default class LastName extends Plugin {

  constructor(props: Props) {
    super(props)

    this.DEFAULT_NODE = {
        object: 'text',
        leaves: [
          {
            text: 'Last Name',
          },
        ],
      }
  }

  props: Props

  // eslint-disable-next-line react/display-name
  createButton = (type) => ({ editorState, onChange }: Props) => {
    const onClick = e => {
      e.preventDefault()
    //   const isActive = editorState.blocks.some(block => block.type === type)

      onChange({
        value: editorState
          .change()
          .insertInline(type).value
      })
    }

    // const isActive = editorState.blocks.some(block => block.type === type)

    return <BarButton onClick={onClick} isActive={false} type={type} />
  }

  schema = {
    nodes: {
      [E2]: makeTagNode('e2'),
    }
  }

  barButtons = [
    this.createButton(E2),
  ]

  name = 'employee-last-name'


  // /**
  //  * Deserialize the initial editor value.
  //  *
  //  * @type {Object}
  //  */

  // state = {
  //   users: [],
  //   value: Value.fromJSON(localStorage.getItem('employee')),
  // }

  deserialize = (el, next) => {
    switch (el.tagName.toLowerCase()) {
      case 'e2':
        return  {
          object: 'inline',
          type: E2,
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'Last Name',
                },
              ],
            },
          ]
        }
    }
  }

  serialize = (
    object: { type: string, object: string, data: any },
    children: any[]
  ) => {
    if (object.object !== 'block') {
      return
    }
    const style = { textAlign: object.data.get('align') }
    switch (object.type) {
      case E2:
        return <b style={style}>Last Name</b>
    }
  }

  renderNode = props => {
    const { children } = props
    const style = { textAlign: props.node.data.get('align') }
    console.log(children);
    switch (props.node.type) {
      case E2: {
        return (
          <EmbaedData {...props} />
        )
      }
    }
  }

}
