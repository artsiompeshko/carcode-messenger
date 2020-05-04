import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Message } from './message';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2, 3),
    flex: '1 1 100%',
  },
}));

const Messages = ({ messages }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {messages.map(message => (
        <Message message={message} />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Messages;
