import React from 'react';

import { usePwaInstall } from './pwa-install.hook';

import PwaInstall from './pwa-install.presentation';

const PwaInstallContainer = () => {
  const [isCustomInstallSupported, isInstalling, isInstalled, install] = usePwaInstall();

  return (
    <PwaInstall
      isCustomInstallSupported={isCustomInstallSupported}
      isInstalling={isInstalling}
      isInstalled={isInstalled}
      handleClick={install}
    />
  );
};

export default PwaInstallContainer;
