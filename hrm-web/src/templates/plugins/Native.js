import React from 'react'

const Native = ({
  state: { item, itemType }
}: {
  state: { itemType: string, item: string }
}) => (
  <div>
    <p>
      This is a default plugin that handles native drag events of type{' '}
      <code>{itemType}</code>.<br />
      It contained the following payload:
    </p>
    <pre>{JSON.stringify(item, null, 2)}</pre>
  </div>
)

export default (hover: any, monitor: any, component: any) => ({
  Component: Native,
  name: 'my-native-plugin',
  createInitialState: () => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType()
  }),
  version: '0.0.1',
  type: 'layout'
})