import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';
import data from './../../data';
import { func } from 'prop-types';

class Workingplace extends Component {

    state = {
        placement: {
            work_place_id: 'Work Place',
            servicesector: 'Service Sector'
            
        }
    };


    componentWillReceiveProps() {
        console.log(this);
        var placement = localStorage.getItem('placement');
        console.log(placement);
        if (placement !== undefined) {
            this.state.placement = cloneDeep(JSON.parse(placement));
        }else{
          

        }
    }


   


    // data.working_places.filter(function(){
    //    working_places.id= this.state.placement.work_place_id
    //    return working_places.name;

    // })


    filterPlaces  (sectorData){
        sectorData.filter(function(data){
            var placement = localStorage.getItem('placement');
        //  return  data.id = JSON.pa
            // return data.name;

    })
    }
   
    renderSwitch(service_sector) {
        
        switch(service_sector) {
          case 'sleas':
            return  filterPlaces(data.working_places.sleas)[0].name

            // return data.working_places.sleas[this.state.placement.work_place_id].name;
          case 'sltes':
            return data.working_places.sltes[this.state.placement.work_place_id].name;
          case 'cs':
            return data.working_places.cs[this.state.placement.work_place_id].name;
          case 'ncs':
            return data.working_places.ncs[this.state.placement.work_place_id].name;  
          default:
            return 'Service Sector Invalid';
        }

      }
      
      
    render() {
        var service_sector = this.state.placement.service_sector;
        console.log(this.state.placement.work_place_id);
        return (
           typeof (this.state.placement.work_place_id) == 'number' ? this.renderSwitch(service_sector) : this.state.placement.work_place_id
           
        )
    }


}


export default {
    Component: Workingplace,
    isInlineable: true,
    name: 'example/content/Workingplace',
    version: '0.0.1',
    text: 'Working Place',
    description: 'Working Place'
}
