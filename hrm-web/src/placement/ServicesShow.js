import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { DateField, ReferenceField, SelectField, Show, SimpleShowLayout, TextField , GET_ONE } from 'react-admin';
import data from '../data';
import TemplateRender from '../templates/TemplateRender';
import dataProvider from '../dataProvider'

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

    componentWillMount() {
        dataProvider(GET_ONE, 'placement', { id: this.props.id })
            .then(response => response.data)
            .then(placement => {
                this.setState({
                    data: placement
                })
                localStorage.removeItem('placement')
                localStorage.setItem('placement', JSON.stringify(placement));
                var d = localStorage.getItem('placement');
                console.log(d);
            })
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
                    <DateField className={this.props.classes.left} source="psc_letter_date" label="PSC Letter Date" />
                    <DateField className={this.props.classes.left} source="psc_letter_no" label="PSC Letter No" />
                    <DateField className={this.props.classes.left} source="off_letter_no" label="Officer Reference No" />
                    <DateField className={this.props.classes.left} source="grade" label="Grade" />

                    <TemplateRender {...this.props}  >
                    </TemplateRender>
                </SimpleShowLayout>
            </Show >
        );
    }

}

export default withStyles(styles)(LetterShow);