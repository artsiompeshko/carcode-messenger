import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    alignSelf: props => (props.type === 'reply' ? 'flex-start' : 'flex-end'),
    flexDirection: 'column',
    padding: theme.spacing(1, 2),
    background: props => (props.type === 'reply' ? '#eaeaea' : '#00aafd'),
    borderRadius: '12px',
    color: props => (props.type === 'reply' ? 'inherit' : theme.palette.common.white),
    marginBottom: theme.spacing(2),
  },
}));

const Message = ({ message }) => {
  const classes = useStyles(message);

  return <div className={classes.root}>{message.body}</div>;
};

Message.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string,
  }).isRequired,
};

export default Message;
