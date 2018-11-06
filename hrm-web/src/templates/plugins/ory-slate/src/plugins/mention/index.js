
import cloneDeep from 'clone-deep';
import React from 'react'
import type  { Props } from '../props'
import Plugin from '../Plugin'
import { makeTagNode, BarButton } from '../../helpers';
import { Value, Data } from 'slate'
import EmbaedData from './node'

export const E1 = 'PARAGRAPH/PARAGRAPH'
export const E2 = 'Employee/last-name'
export const E3 = 'Employee/full-name'
export const E4 = 'Employee/address-line-1'
export const E5 = 'Employee/address-line-2'
export const E6 = 'Employee/address-line-3'
export const P = 'PARAGRAPH/PARAGRAPH'

const createNode = (type: string, el: any, next: any) => ({
  object: 'inline',
  type,
  data: {
    userId: 'First Name',
    username: 'ID',
  },
  // data: Data.create({ style: el.attribs.style }),
  nodes: [
    {
      object: 'text',
      leaves: [
        {
          text: 'Fist Name',
        },
      ],
    },
  ],
})

export default class MentionsExample extends Plugin {

  constructor(props: Props) {
    super(props)

    this.DEFAULT_NODE = props.DEFAULT_NODE
    this.state = {
      employee: {
        Personal_Details: {
          f_name: 'First Name',
          l_name: 'Last Name',
          m_name: 'Middle Name',
          in_name: 'Name with initial',
          si_in_name: 'Name in Sinhala',
          ta_in_name: 'Name in Tamil',
          // address_line_1:'Address Line 1',
          // address_line_2:'Address Line 2',
          // address_line_3:'Address Line 3',
        }
      }
    }
  }

  props: Props

  // eslint-disable-next-line react/display-name
  createButton = (type) => ({ editorState, onChange }: Props) => {
    const onClick = e => {
      e.preventDefault()
      const isActive = editorState.blocks.some(block => block.type === type)

      onChange({
        value: editorState
          .change()
          .insertBlock(type).value
      })
    }

    const isActive = editorState.blocks.some(block => block.type === type)

    return <BarButton onClick={onClick} isActive={false} type={type} />
  }

  componentWillReceiveProps() {
    var employee = localStorage.getItem('employee');
    console.log(employee);
    if (employee !== undefined) {
      this.state.employee = cloneDeep(JSON.parse(employee));
    }
  }

  schema = {
    nodes: {
      [E1]: makeTagNode('e1'),
      [E2]: makeTagNode('e2'),
      [E3]: makeTagNode('e3'),
      [E4]: makeTagNode('e4'),
      [E5]: makeTagNode('e5'),
      [E6]: makeTagNode('e6')
    }
  }

  barButtons = [
    this.createButton(E1),
    this.createButton(E2),
    this.createButton(E3),
    this.createButton(E4),
    this.createButton(E5),
    this.createButton(E6)
  ]

  name = 'employee'


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
      case 'e1':
        return {
          object: 'inline',
          type: E1,
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: this.state.employee.Personal_Details.f_name,
                },
              ],
            },
          ]
        }
      case 'e2':
        return {
          object: 'inline',
          type: E1,
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: this.state.employee.Personal_Details.l_name,
                },
              ],
            },
          ]
        }
      case 'e3':
        return {
          object: 'inline',
          type: E1,
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: this.state.employee.Personal_Details.m_name,
                },
              ],
            },
          ]
        }
      case 'e4':
        return createNode(E4, el, next)
      case 'e5':
        return createNode(E5, el, next)
      case 'e6':
        return createNode(E6, el, next)
    }
  }

  serialize = (
    object: { type: string, object: string, data: any },
    children: any[]
  ) => {
    if (object.object !== 'inline') {
      return
    }
    const style = { textAlign: object.data.get('align') }
    console.log(object.data.get(E1))
    switch (object.type) {
      case E1:
        return <p style={style}>{this.state.employee.Personal_Details.f_name}</p>
      case E2:
        return <p style={style}>{this.state.employee.Personal_Details.l_name}</p>
      case E3:
        return <p style={style}>{children}</p>
      case E4:
        return <p style={style}>{children}</p>
      case E5:
        return <p style={style}>{children}</p>
      case E6:
        return <p style={style}>{children}</p>
    }
  }

  renderNode = props => {
    const { children } = props
    const style = { textAlign: props.node.data.get('align') }
    console.log(children);
    switch (props.node.type) {
      case E1: {
        return (
          <p>{this.state.employee.Personal_Details.f_name}{children}</p>
        )
      }

      case E2: {
        return (
          this.state.employee.Personal_Details.m_name
        )
      }
    }
    // switch (props.node.type) {
    //   case E1:
    //     return 
    //   case E2:
    //     return <p style={style}>{children}</p>
    //   case E3:
    //     return <p style={style}>{children}</p>
    //   case E4:
    //     return <p style={style}>{children}</p>
    //   case E5:
    //     return <p style={style}>{children}</p>
    //   case E6:
    //     return <p style={style}>{children}</p>
    // }
  }

}
