import 'ory-editor-core/lib/index.css';
import 'ory-editor-plugins-parallax-background/lib/index.css';
import 'ory-editor-plugins-slate/lib/index.css';
import 'ory-editor-ui/lib/index.css';

import Editor, { createEmptyState, Editable } from 'ory-editor-core';
import native from 'ory-editor-plugins-default-native';
import divider from 'ory-editor-plugins-divider';
import image from 'ory-editor-plugins-image';
import parallax from 'ory-editor-plugins-parallax-background';
// import slate from 'ory-editor-plugins-slate';
import spacer from 'ory-editor-plugins-spacer';
import { DisplayModeToggle, Toolbar, Trash } from 'ory-editor-ui';
import React, { Component } from 'react';
import { addField } from 'react-admin';

import firstName from './plugins/firstName';
import imageUploader from './plugins/imageUploader';
import firstNameLable from './plugins/lables/firstNameLable';
import Footer from './plugins/lables/footer';
import Header from './plugins/lables/header';
import lastName from './plugins/lastName';
import PCSLetterInput from './plugins/pcsLetterDate';
import richTextEditor from './plugins/richTextEditor';
import newSlate from './plugins/ory-slate/src';
import lastNameLable from './plugins/lables/lastNameLable';
import nameInEn from './plugins/lables/nameInEn';
import nameInSi from './plugins/lables/nameInSi';
import nameInTa from './plugins/lables/nameInTa';
import fullNameInSi from './plugins/fullNameInSi';
import fullNameInTa from './plugins/fullNameInTa';
import fullNameInEn from './plugins/fullNameInEn';
<<<<<<< HEAD
import WorkingPlace from './plugins/workingplace';
import Designation from './plugins/designation';
import WorkingBranch from './plugins/workingBranch';
import respectiveLetterNoLable from './plugins/lables/respectiveLetterNoLable';
import respectiveLetterNo from './plugins/respectiveLetterNo';
=======
import PCSLetterNo from './plugins/PSCLetterNo';
import WorkingPlace from './plugins/workingplace';
import WorkingBranch from './plugins/workingbranch';

>>>>>>> development

// import { Inline } from 
require('react-tap-event-plugin')() // react-tap-event-plugin is required by material-ui which is used by ory-editor-ui so we need to call it here


// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
    content: [
        // slate(),
        newSlate(),
        image,
        spacer,
        firstName,
        lastName,
        fullNameInSi,
        fullNameInTa,
        fullNameInEn,
        PCSLetterInput,
        divider,
        imageUploader,
        richTextEditor,
        firstNameLable,
        lastNameLable,
        nameInEn,
        nameInSi,
        nameInTa,
        Header,
        Footer,
<<<<<<< HEAD
        WorkingPlace,
        Designation,
        respectiveLetterNoLable,
        respectiveLetterNo,
        WorkingBranch,

=======
        PCSLetterNo,
        WorkingPlace,
        WorkingBranch
>>>>>>> development

    ], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
    layout: [parallax({ defaultPlugin: newSlate() }),
    ], // Define plugins for layout cells
    native
}

// Creates an empty editable
const content = createEmptyState()

// Instantiate the editor
const editor = new Editor({
    plugins,
    defaultPlugin: newSlate(),
    // pass the content state - you can add multiple editables here
    editables: [content, lastName, firstName],
    native
})

const handle = (record, input) => {
    console.log(input)
    input.value = JSON.parse(record.body)
    console.log(input)
    return input;
}

class TemplateBuilder extends Component {

    componentWillMount() {
        console.log(this)
        this.input = this.props.input
        if (this.props.record !== undefined) {
            if (this.props.record.body !== undefined) {
                this.input.value = JSON.parse(this.props.record.body)
                this.editorState = this.input.value;
                this.content = this.input.value;;
                this.editor = new Editor({ plugins, editables: [this.input.value] });
            }
        }
    }


    render() {
        if (this.props.id !== undefined) {
            return (
                <div className="my-editor">
                    {/* Content area */}
                    <Editable
                        editor={this.editor}
                        id={this.content.id}
                        {...this.input}

                    />

                    {/*  Default user interface  */}
                    <Trash editor={this.editor} />
                    <DisplayModeToggle editor={this.editor} />
                    <Toolbar editor={this.editor} />
                </div>
            )

        } else {
            return (
                <div className="my-editor">

                    {/* Content area */}
                    <Editable
                        editor={editor}
                        id={content.id}
                        {...this.input}
                    />
                    {/*  Default user interface  */}
                    <Trash editor={editor} />
                    <DisplayModeToggle editor={editor} />
                    <Toolbar editor={editor} />
                </div>

            )
        }

    }
}



export default addField(TemplateBuilder);