import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useQuery } from 'core/hooks';

import { PwaInstall } from './pwa-install';
import { PushNotifications } from './push-notifications';

import InstallingModal from './installing-modal.presentation';

function getSteps() {
  return [
    {
      key: 'install',
      title: 'Install Application',
      ContentComponent: PwaInstall,
    },
    {
      key: 'web-notifications',
      title: 'Activate Notifications',
      ContentComponent: PushNotifications,
    },
  ];
}

const InstallingModalContainer = () => {
  const query = useQuery();

  const [open, setOpen] = useState(!!query.get('install'));
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const reset = () => {
    setOpen(false);
    setActiveStep(0);

    window.history.replaceState(null, null, window.location.pathname);
  };

  const handleNext = () => {
    const nextActiveStep = activeStep + 1;

    if (nextActiveStep >= steps.length) {
      reset();
    } else {
      setActiveStep(nextActiveStep);
    }
  };

  const handleBack = () => {
    const nextActiveStep = activeStep - 1;

    if (nextActiveStep < 0) {
      reset();
    } else {
      setActiveStep(nextActiveStep);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <InstallingModal
      open={open}
      steps={steps}
      activeStepIndx={activeStep}
      handleNext={handleNext}
      handleBack={handleBack}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export default InstallingModalContainer;
