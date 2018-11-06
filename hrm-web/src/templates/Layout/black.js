import React from 'react'

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
import CropSquare from '@material-ui/icons/CropSquare'

const BlackBorderPlugin = ({ children }) => (
  <div style={{ border: '1px solid black', padding: '16px' }}>
    {children}test
  </div>
)

export default {
  Component: BlackBorderPlugin,
  IconComponent: <CropSquare />,
  name: 'example/layout/black-border',
  version: '0.0.1',
  text: 'Black border',
  type:'layout'
}