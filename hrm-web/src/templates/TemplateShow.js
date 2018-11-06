import 'ory-editor-plugins-parallax-background/lib/index.css';
import 'ory-editor-plugins-slate/lib/index.css';

import divider from 'ory-editor-plugins-divider';
import image from 'ory-editor-plugins-image';
import parallax from 'ory-editor-plugins-parallax-background';
import slate from 'ory-editor-plugins-slate';
import spacer from 'ory-editor-plugins-spacer';
import { HTMLRenderer } from 'ory-editor-renderer';
import React, { Component, createContext } from 'react';
import { GET_ONE, Show, SimpleShowLayout } from 'react-admin';

import dataProvider from '../dataProvider';
import firstName from './plugins/firstName';
import firstNameLable from './plugins/lables/firstNameLable';
import Footer from './plugins/lables/footer';
import Header from './plugins/lables/header';
import lastName from './plugins/lastName';
import Native from './plugins/Native';
import PCSLetterInput from './plugins/pcsLetterDate';

// Load some exemplary plugins:
// Define which plugins we want to use. We only have slate and parallax available, so load those.
const EditorPlugins = {
    content: [
        slate(),
        image,
        spacer,
        firstName,
        lastName,
        PCSLetterInput,
        divider,
        firstNameLable,
        Header,
        Footer
        // black
    ], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
    layout: [parallax({ defaultPlugin: slate() })], // Define plugins for layout cells
    Native
}


class TemplateShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            template: {}
        };

    }

    componentWillReceiveProps() {
        dataProvider(GET_ONE, 'templates', { id: this.props.id })
            .then(response => response.data.body)
            .then(template => {
                this.setState({ template: JSON.parse(template) })
            })
    }

    render() {
        return (
            <Show {...this.props}>
                <SimpleShowLayout>
                    <HTMLRenderer state={this.state.template}  {...this.props} plugins={EditorPlugins} />
                </SimpleShowLayout>
            </Show>
        )
    }
}



export default TemplateShow;