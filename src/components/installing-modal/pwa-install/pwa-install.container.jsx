import React from 'react';
import PropTypes from 'prop-types';

import { usePwaInstall } from './pwa-install.hook';

import PwaInstall from './pwa-install.presentation';

const PwaInstallContainer = ({ handleSubmit }) => {
  const [isCustomInstallSupported, isInstalling, isInstalled, install] = usePwaInstall({ handleSubmit });

  const handleClick = () => {
    install();
  };

  return (
    <PwaInstall
      isCustomInstallSupported={isCustomInstallSupported}
      isInstalling={isInstalling}
      isInstalled={isInstalled}
      handleClick={handleClick}
    />
  );
};

PwaInstallContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default PwaInstallContainer;
