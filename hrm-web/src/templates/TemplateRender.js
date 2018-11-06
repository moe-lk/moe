import 'ory-editor-plugins-parallax-background/lib/index.css';
import 'ory-editor-plugins-slate/lib/index.css';

import { Typography } from '@material-ui/core';
import { createEmptyState } from 'ory-editor-core';
import divider from 'ory-editor-plugins-divider';
import image from 'ory-editor-plugins-image';
import parallax from 'ory-editor-plugins-parallax-background';
import spacer from 'ory-editor-plugins-spacer';
import { HTMLRenderer } from 'ory-editor-renderer';
import React, { Component, createContext } from 'react';
import { FormDataConsumer, GET_ONE, ReferenceInput, SelectInput, SimpleForm } from 'react-admin';

import dataProvider from '../dataProvider';
import firstName from './plugins/firstName';
import fullNameInEn from './plugins/fullNameInEn';
import fullNameInSi from './plugins/fullNameInSi';
import fullNameInTa from './plugins/fullNameInTa';
import firstNameLable from './plugins/lables/firstNameLable';
import Footer from './plugins/lables/footer';
import Header from './plugins/lables/header';
import lastNameLable from './plugins/lables/lastNameLable';
import nameInEn from './plugins/lables/nameInEn';
import nameInSi from './plugins/lables/nameInSi';
import nameInTa from './plugins/lables/nameInTa';
import lastName from './plugins/lastName';
import Native from './plugins/Native';
import newSlate from './plugins/ory-slate/src';
import PCSLetterInput from './plugins/pcsLetterDate';

// Load some exemplary plugins:
// import black from './Layout/black';
// Define which plugins we want to use. We only have slate and parallax available, so load those.
const EditorPlugins = {
    content: [
        newSlate(),
        image,
        spacer,
        firstName,
        lastName,
        PCSLetterInput,
        divider,
        firstNameLable,
        lastNameLable,  
        fullNameInEn,
        fullNameInSi,
        fullNameInTa,
        nameInEn,
        nameInSi,
        nameInTa,
        Header,
        Footer
        // black
    ], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
    layout: [parallax({ defaultPlugin: newSlate() })], // Define plugins for layout cells
    Native
}

function updateState(text) {
    this.setState({ text })
}



class TemplateRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            template: createEmptyState(),
            data: null
        };

    }



    updateProps(data) {
        if (data !== undefined) {
            dataProvider(GET_ONE, 'templates', { id: data.template })
                .then(response => response.data.body)
                .then(template => {
                    this.state.template = JSON.parse(template)
                })
        }
    }

    componentWillReceiveProps() {
        dataProvider(GET_ONE, 'employees', { id: this.props.record.person_id })
            .then(response => response.data)
            .then(employee => {
                this.setState({
                    data: employee
                })
                localStorage.removeItem('employee')
                localStorage.setItem('employee', JSON.stringify(employee));
            })
    }

    render() {
        return (
                <SimpleForm>
                    <Typography>Print The Placement Letter</Typography>
                    <ReferenceInput label="Select the template" source="template" reference="templates" >
                        <SelectInput optionText="name" />
                    </ReferenceInput>
                    <FormDataConsumer>
                        {({ formData, ...rest }) => {
                            this.updateProps(formData);
                        }
                        }

                    </FormDataConsumer>
                    <HTMLRenderer state={this.state.template} to={{
                        state: { ...this.state }
                    }}  {...this.props} plugins={EditorPlugins} />
                </SimpleForm>
        )
    }
}

export default TemplateRender;