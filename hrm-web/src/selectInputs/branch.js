// in SubGenreInput.js
import React, { Component } from 'react';
import { SelectInput, ReferenceInput, FormDataConsumer } from 'react-admin';
import { DependentInput } from 'aor-dependent-input';

class BranchInput extends Component {
    
    handleWorkPlace = (props) => {
        if (props.work_place_id < 5) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <DependentInput resolve={this.handleWorkPlace}>
                <FormDataConsumer>
                    {({ formData, ...rest }) =>
                        formData ? formData.work_place_id &&
                            <ReferenceInput
                                label="Working Branch"
                                source="work_branch_id"
                                reference="options"
                                filter={{ table: 'Main_Office_Branches', filter: ['work_place_id,=,' + formData.work_place_id] }}>
                                <SelectInput optionText="office_branch" {...rest} />
                            </ReferenceInput>
                            : ''
                    }
                </FormDataConsumer>
            </DependentInput>
        )
    }
}

// BranchInput.propTypes = ReferenceInput.propTypes;
// BranchInput.defaultProps = ReferenceInput.defaultProps;

export default BranchInput;