import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';

import CardIcon from './CardIcon';

const styles = theme => ({
    main: {
        flex: '1',
        marginLeft: '1em',
        marginTop: 20,
    },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'right',
    },
    title: {
        padding: '0 16px',
    },
    value: {
        padding: '0 16px',
        minHeight: 48,
    },
    avatar: {
        background: theme.palette.background.avatar,
    },
    listItemText: {
        paddingRight: 0,
    },
});

const NewEmployees = ({ visitors = [], nb,permissions, translate, classes }) => (
    <div className={classes.main} >
        <CardIcon Icon={CustomerIcon} bgColor="#4caf50" />
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
                New Officers
            </Typography>
            <Typography
                variant="headline"
                component="h2"
                className={classes.value}
            >
                {nb}
            </Typography>
            <Divider />
            <List>
                {visitors.map(record => (
                    <ListItem
                        button
                        to={`/employees/${record.id}`}
                        component={Link}
                        key={record.id}
                    >
                        
                        <ListItemText
                            primary={`${record.en_fullname}`}
                            className={classes.listItemText}
                        />
                    </ListItem>
                ))}
            </List>
        </Card>
    </div>
);

const enhance = compose(
    withStyles(styles),
    translate
);

export default enhance(NewEmployees);
