import React from 'react';

import { NavLink } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ChatIcon from '@material-ui/icons/Chat';
import CallIcon from '@material-ui/icons/Call';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import { CircleButton } from 'shared-components/circle-button';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 24px',
  },
  title: {
    marginBottom: '24px',
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  options: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&>*:not(:last-child)': {
      marginRight: '24px',
    },
    '&>*': {
      textDecoration: 'none',
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        Get started by messaging or calling a dealer below.
      </Typography>
      <div className={classes.options}>
        <NavLink to="/conversations">
          <CircleButton Icon={ChatIcon} title="Message" />
        </NavLink>
        <NavLink to="/video-calls">
          <CircleButton Icon={VideoCallIcon} title="Video Chat" />
        </NavLink>
        <NavLink to="/calls">
          <CircleButton Icon={CallIcon} title="Call" />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
