import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const PushNotifications = ({ disabled, handleClick }) => (
  <Button disabled={disabled} color="primary" onClick={handleClick}>
    Enable push notifications
  </Button>
);

PushNotifications.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PushNotifications;
