import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import {
    translate,
    DashboardMenuItem,
    MenuItemLink,
    Responsive,
} from 'react-admin';
import { withRouter } from 'react-router-dom';

import PeopleIcon from '@material-ui/icons/People';
import  PlacementIcon from '@material-ui/icons/Place';
import  AddOfficerIcon from '@material-ui/icons/PersonAdd';
import  TransferIcon from '@material-ui/icons/Transform';
import  PromotionIcon from '@material-ui/icons/ArrowUpward';
import  AttachmentIcon from '@material-ui/icons/Attachment';
import  SecondmentIcon from '@material-ui/icons/AttachFile';
import  SalaryIcon from '@material-ui/icons/RateReview';
import  IncrementIcon from '@material-ui/icons/AttachMoney';
import  DiscipilinaryIcon from '@material-ui/icons/Mood';
import  VerifyIcon from '@material-ui/icons/VerifiedUser';
import  LetterTemplateIcon from '@material-ui/icons/Pages';
import { Paper, Card } from '@material-ui/core';

const items = [
    { name: 'employees', path:'employees', icon: <PeopleIcon/> },
    { name: 'new_employee' , path:'employees/create', icon: <AddOfficerIcon/>},
    { name: 'placement', path:'placement', icon: <PlacementIcon/> },
    { name: 'templates', path:'templates', icon: <LetterTemplateIcon/> },
    { name: 'transfer', path:'transfer', icon: <TransferIcon/> },
    { name: 'promotion', path:'promotion', icon: <PromotionIcon/> },
    { name: 'attachment', path:'attachment', icon: <AttachmentIcon/> },
    { name: 'secondment', path:'secondment', icon: <SecondmentIcon/> },
    { name: 'salary_revision', path:'salary', icon: <SalaryIcon/> },
    { name: 'increment', path:'increment', icon: <IncrementIcon/> },
    { name: 'discipilinary', path:'discipilinary', icon: <DiscipilinaryIcon/> },
    { name: 'verify', path:'verify', icon: <VerifyIcon/> }
];

const Menu = ({ onMenuClick, translate, logout }) => (
    <Card>
        <DashboardMenuItem onClick={onMenuClick} />
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to={`/${item.path}`}
                primaryText={translate(`resources.${item.name}.name`, {
                    smart_count: 2,
                })}
                leftIcon={item.icon}
                onClick={onMenuClick}
            />
        ))}
         <Responsive
            xsmall={
                <MenuItemLink
                    to="/configuration"
                    primaryText='Configuration'
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                />
            }
            medium={null}
        />
        <Responsive xsmall={logout} medium={null} />
    </Card>
);

const enhance = compose(
    withRouter,
    connect(
        state => ({
            theme: state.theme,
            locale: state.i18n.locale,
        }),
        {}
    ),
    translate
);

export default enhance(Menu);
