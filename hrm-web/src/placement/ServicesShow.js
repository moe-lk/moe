import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { DateField, ReferenceField, SelectField, Show, SimpleShowLayout, TextField } from 'react-admin';

import data from '../data';
import TemplateRender from '../templates/TemplateRender';

const styles = theme => ({
    left: { display: 'inline-block', marginRight: 36, minWidth: 192 },
    right: { display: 'inline-block', marginRight: 36 }
});


class LetterShow extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    render() {
        return (
            <Show {...this.props}  >
                <SimpleShowLayout >
                    <SelectField className={this.props.classes.left} choices={data.sector} source="service_sector" label="Service Sector" />
                    <ReferenceField className={this.props.classes.left} source="designation_id" label="Designation" reference="designation" linkType={false} >
                        <TextField source="designation" />
                    </ReferenceField>
                    <ReferenceField className={this.props.classes.left} source="work_place_id" label="Working Place" reference="workplace" linkType={false} >
                        <TextField source="work_place" />
                    </ReferenceField>
                    <ReferenceField className={this.props.classes.left} source="work_branch_id" label="Working Branch" reference="workbranch" linkType={false} >
                        <TextField source="office_branch" />
                    </ReferenceField>
                    <SelectField className={this.props.classes.left} choices={data.service_mode} source="service_mode" label="Mode of Service" />
                    <DateField className={this.props.classes.left} source="appoint_date" label="Date of Appoitment" />
                    <DateField className={this.props.classes.left} source="duty_date" label="First Date attend for the Duty" />
                    <TemplateRender {...this.props}  >
                    </TemplateRender>
                </SimpleShowLayout>
            </Show >
        );
    }

}

export default withStyles(styles)(LetterShow);