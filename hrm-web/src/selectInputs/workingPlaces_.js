/**********************************************************************
 * This Application is developed by LSF and maintaine by LSF          *
 * This component build using with react-admin and material-ui core.  *
 * This is an open source under the MIT and any one can use this code *
 * with rights of reuse, distribuse without any limitations align     *
 * with this Terms.                                                   *              
 * ********************************************************************
 * 
 */

import {
    SelectInput,
    ReferenceInput,
    AutocompleteInput
} from 'react-admin';
import React, { Component, Fragment } from 'react';
import { DependentInput } from 'aor-dependent-input';

class WorkingPlaceSelectInput extends Component {


    render() {
        return (
            <Fragment>
                <DependentInput dependsOn="work_place_id" value={1} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"  resource="options" reference="options" filter={{ table: 'Main_Office_Branches', filter: ['work_place_id,=,1'] }}>
                        <SelectInput optionText="office_branch" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={2} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"  resource="options" reference="options" filter={{ table: 'Main_Office_Branches', filter: ['work_place_id,=,2'] }}>
                        <SelectInput optionText="office_branch" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={3}  >
                    <ReferenceInput label="Working Branch" source="work_branch_id"  resource="options" reference="options" filter={{ table: 'Main_Office_Branches', filter: ['work_place_id,=,3'] }}>
                        <SelectInput optionText="office_branch" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={4} >
                    <ReferenceInput label="Working Branch" source="work_branch_id" reference="options" filter={{ table: 'Main_Office_Branches', filter: ['work_place_id,=,4'] }}>
                        <SelectInput optionText="office_branch" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={5} >
                    <ReferenceInput label="Provice" source="sub_location_id"  resource="options" reference="options" filter={{ table: 'Province_List', filter: ['id,!=,0'] }}>
                        <SelectInput optionText="province" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={6} >
                    <ReferenceInput label="Provice" source="sub_location_id"  resource="options" reference="options" filter={{ table: 'Province_List', filter: ['id,!=,0'] }}>
                        <SelectInput optionText="province" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={7} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"  resource="options" reference="options" filter={{ table: 'Zonal_Offices', filter: ['work_place_id,=,7'] }}>
                        <AutocompleteInput optionText="zonal_office" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={8} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"  resource="options" reference="options" filter={{ table: 'Divisional_Offices', filter: ['work_place_id,=,8'] }}>
                        <AutocompleteInput optionText="division_office" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={9} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"   resource="options" reference="options" filter={{ table: 'Institute', filter: ['workplace_id,=,9'] }}>
                        <AutocompleteInput optionText="institute_name" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={10} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"  resource="options"  reference="options" filter={{ table: 'Institute', filter: ['workplace_id,=,10'] }}>
                        <AutocompleteInput optionText="institute_name" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={11} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"   resource="options" reference="options" filter={{ table: 'Institute', filter: ['workplace_id,=,11'] }}>
                        <AutocompleteInput optionText="institute_name" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={12} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"   resource="options" reference="options" filter={{ table: 'Institute', filter: ['workplace_id,=,12'] }}>
                        <AutocompleteInput optionText="institute_name" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={13} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"  resource="options"  reference="options" filter={{ table: 'Institute', filter: ['workplace_id,=,13'] }}>
                        <AutocompleteInput optionText="institute_name" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={14}>
                    <ReferenceInput label="Working Branch" source="work_branch_id"   resource="options" reference="options" filter={{ table: 'Institute', filter: ['workplace_id,=,14'] }}>
                        <AutocompleteInput optionText="institute_name" />
                    </ReferenceInput>
                </DependentInput>
                <DependentInput dependsOn="work_place_id" value={15} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"  resource="options" reference="options" filter={{ table: 'Institute', filter: ['workplace_id,=,15'] }}>
                        <AutocompleteInput optionText="institute_name" />
                    </ReferenceInput>
                </DependentInput>

                <DependentInput dependsOn="work_place_id" value={16} >
                    <ReferenceInput label="Working Branch" source="work_branch_id"  resource="options" reference="options" filterToQuery={searchText => ({ search: searchText })} filter={{ table: 'Institute', filter: ['workplace_id,=,16'] }}>
                        <AutocompleteInput optionText="institute_name" />
                    </ReferenceInput>
                </DependentInput>
            </Fragment>
        )
    }
}

export default WorkingPlaceSelectInput


