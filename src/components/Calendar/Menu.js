import React, { useEffect, useState } from 'react';
import Selectable from './Selectable';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {IndexLinkContainer} from 'react-router-bootstrap';
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';
import Login from "../Login.js";
import PopModal from "./PopModal.js";
import HomeWorkSharpIcon from '@material-ui/icons/HomeWorkSharp';
import DnsSharpIcon from '@material-ui/icons/DnsSharp';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import irlogo from '../../iroster.png';

const drawerWidth = 240;




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            iRoster
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Venues'].map((text, index) => (
            <IndexLinkContainer to={"/venue"}>
              <ListItem button key={text}>
              <ListItemIcon>{index = <HomeWorkSharpIcon /> }</ListItemIcon>
              <ListItemText primary={text} />
              </ListItem>
            </IndexLinkContainer>

          ))}
        </List>
        <List>
          {['Shifts'].map((text, index) => (
            <IndexLinkContainer to={"/shift"}>
              <ListItem button key={text}>
              <ListItemIcon>{index = <DnsSharpIcon /> }</ListItemIcon>
              <ListItemText primary={text} />
              </ListItem>
            </IndexLinkContainer>

          ))}
        </List>
        <List>
          {['Add Employee'].map((text, index) => (
            <IndexLinkContainer to={"/editemployee"}>
              <ListItem button key={text}>
              <ListItemIcon>{index = <GroupAddSharpIcon /> }</ListItemIcon>
              <ListItemText primary={text} />
              </ListItem>
            </IndexLinkContainer>

          ))}
        </List>
        <List>
          {['Add Venue'].map((text, index) => (
            <IndexLinkContainer to={"/venue/:venueId"}>
              <ListItem button key={text}>
              <ListItemIcon>{index = <AddCircleSharpIcon /> }</ListItemIcon>
              <ListItemText primary={text} />
              </ListItem>
            </IndexLinkContainer>

          ))}
        </List>
        <Divider />
        <List>
          {['Edit Profile'].map((text, index) => (
            <IndexLinkContainer to={"/venue/:venueId"}>
              <ListItem button key={text}>
              <ListItemIcon>{index = <AccountCircleSharpIcon /> }</ListItemIcon>
              <ListItemText primary={text} />
              </ListItem>
            </IndexLinkContainer>
          ))}
        </List>
        <List>
          {['Logout'].map((text, index) => (
            <IndexLinkContainer to={"/logout"}>
              <ListItem button key={text}>
              <ListItemIcon>{index = <ExitToAppSharpIcon /> }</ListItemIcon>
              <ListItemText primary={text} />
              </ListItem>
            </IndexLinkContainer>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Selectable />
      </main>
    </div>
  );
}
