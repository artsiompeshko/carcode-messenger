import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
}));

const PushNotifications = ({ disabled, isSubscribed, handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!isSubscribed && (
        <>
          <Typography variant="subtitle2" gutterBottom>
            We can send you notifications when new message comes from dealer:
          </Typography>
          <Button disabled={disabled} color="primary" onClick={handleClick}>
            Enable push notifications
          </Button>
        </>
      )}
      {isSubscribed && (
        <>
          <Typography variant="subtitle2" gutterBottom>
            You have already enabled notifications. Thanks!
          </Typography>
          <Button disabled={disabled} color="primary" onClick={handleClick}>
            Disable push notifications
          </Button>
        </>
      )}
    </div>
  );
};

PushNotifications.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PushNotifications;
