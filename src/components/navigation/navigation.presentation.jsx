import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ChatIcon from '@material-ui/icons/Chat';
import CallIcon from '@material-ui/icons/Call';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import { ListItemLink } from 'shared-components/list-item-link';

const drawerWidth = 68;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    overflowX: 'hidden',
    width: drawerWidth,
    background: 'transparent',
    border: 0,
  },
  toolbar: theme.mixins.toolbar,
  icon: {
    minWidth: 0,
    color: 'inherit',
    fontSize: '1.6rem',
  },
  list: {
    color: theme.palette.common.white,
    padding: 0,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List className={classes.list}>
        <ListItemLink to="/conversations">
          <ListItemIcon className={classes.icon}>
            <ChatIcon fontSize="inherit" />
          </ListItemIcon>
        </ListItemLink>
        <ListItemLink to="/video-calls">
          <ListItemIcon className={classes.icon}>
            <VideoCallIcon fontSize="inherit" />
          </ListItemIcon>
        </ListItemLink>
        <ListItemLink to="/calls">
          <ListItemIcon className={classes.icon}>
            <CallIcon fontSize="inherit" />
          </ListItemIcon>
        </ListItemLink>
      </List>
    </Drawer>
  );
};

export default Navigation;
