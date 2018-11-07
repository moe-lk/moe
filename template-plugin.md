we are using ory-editor for Template builder as our base template builder.
To be able to build dynamic letter templates we need to develop custom plugins.
Here find how to buid a plugin 

demo http://editor.ory.sh/
doc https://ory.gitbooks.io/editor/content/


```
import React, {Component} from 'react'

You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
import StarIcon from 'material-ui/svg-icons/toggle/star'

// This is the ReactJS component which you can find below this snippet
import InputTextField from './Component'

export default {
  Component: InputTextField,
  IconComponent: <StarIcon />,
  name: 'example/content/input-text-field',
  version: '0.0.1',
  text: 'Input Text Field'
}
```
The developed plugin has to be import to the `hrm-web/src/templates/TemplateRender.js` and `hrm-web/src/templates/TemplateBuilder.js`

Please refer the developed plugins for more information
