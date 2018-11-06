import { InputLabel, Grid } from '@material-ui/core';
import React, { Component } from 'react';

class FooterLable extends Component {

    render() {
        return (
            <Grid item xs={9}>
                <InputLabel><img src="../assets/Footer.png" style={{maxWidth:1050}}/></InputLabel>
            </Grid>
        )
    }


}

export default (FooterLable);