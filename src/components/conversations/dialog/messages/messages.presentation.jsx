import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Message } from './message';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2, 3),
    flex: '1 1 100%',
    maxHeight: 'calc(100vh - 150px)',
    overflowY: 'scroll',
    [theme.breakpoints.up('md')]: {
      maxHeight: 'calc(100vh - 180px)',
    },
  },
}));

const Messages = ({ messages }) => {
  const classes = useStyles();
  const lastEl = useRef(null);

  useEffect(() => {
    lastEl.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={classes.root}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={lastEl} />
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Messages;
