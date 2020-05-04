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

const PwaInstall = ({ isCustomInstallSupported, isInstalling, isInstalled, handleClick }) => {
  const classes = useStyles();

  return (
    <>
      {isCustomInstallSupported && (
        <div className={classes.root}>
          <Typography variant="subtitle2" gutterBottom>
            To make CarCode messenger available offline at any time from you phone, please, click on install button
            below:
          </Typography>
          <Button variant="outlined" disabled={isInstalling} color="primary" onClick={handleClick}>
            {isInstalling ? 'Installing...' : 'Install CarCode Messenger'}
          </Button>
        </div>
      )}
      {!isCustomInstallSupported && (
        <div className={classes.root}>
          <Typography variant="subtitle2" gutterBottom>
            Application was already installed or we do not support your browser.
          </Typography>
        </div>
      )}
    </>
  );
};

PwaInstall.propTypes = {
  isCustomInstallSupported: PropTypes.bool.isRequired,
  isInstalling: PropTypes.bool.isRequired,
  isInstalled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PwaInstall;
