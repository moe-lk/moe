import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { translate } from 'react-admin';

const styles = {
    media: {
        height: '18em',
    },
};

const mediaUrl = `https://marmelab.com/posters/employees-${parseInt(
    Math.random() * 10,
    10
) + 1}.jpeg`;

const Welcome = ({ classes, translate }) => (
    <Card>
        <CardContent>
            <Typography variant="headline" component="h2">
               Welcome to CS-HRM
            </Typography>
            <Typography component="p">
                Drive your Employee Data
            </Typography>
        </CardContent>
    </Card>
);

export default withStyles(styles)(translate(Welcome));
