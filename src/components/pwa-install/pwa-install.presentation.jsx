import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const PwaInstall = ({ isCustomInstallSupported, isInstalling, isInstalled, handleClick }) => (
  <>
    {isCustomInstallSupported && (
      <Button disabled={isInstalling} color="primary" onClick={handleClick}>
        {isInstalling ? 'Installing...' : 'Install CarCode Messenger'}
      </Button>
    )}
  </>
);

PwaInstall.propTypes = {
  isCustomInstallSupported: PropTypes.bool.isRequired,
  isInstalling: PropTypes.bool.isRequired,
  isInstalled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PwaInstall;
