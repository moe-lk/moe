import React, { Component } from 'react';
import {
    ImageInput,
    ImageField,
    FileInput
} from 'react-admin';




class ImageUploader extends Component {

    render() {
        return (
            <div>
                <FileInput  source="pictures" label="Related pictures" accept="image/*">
                    <ImageField source="src" title="title" />
                </FileInput>
            </div>
        )
    }


}

export default (ImageUploader);
