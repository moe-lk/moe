import dataProvider from '../../dataProvider';
import { Component } from 'react';
import {
    GET_ONE
} from 'react-admin';

export default class Employee {


    getEmployee(state){
         // this.props.record !== undefined ?
         dataProvider(GET_ONE, 'employees', { id: 1 })//this.props.record.id
         .then(response => response.data)
         .then(employee => {
             this.setState({ employee });
         })
     // : '';
    }
}
