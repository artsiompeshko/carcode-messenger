import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { PwaInstall } from './pwa-install';
import { PushNotifications } from './push-notifications';

import InstallingModal from './installing-modal.presentation';

function getSteps() {
  return [
    {
      key: 'install',
      title: 'Install Application',
      content: <PwaInstall />,
    },
    {
      key: 'web-notifications',
      title: 'Activate Notifications',
      content: <PushNotifications />,
    },
  ];
}

const InstallingModalContainer = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    const nextActiveStep = activeStep + 1;

    if (nextActiveStep >= steps.length) {
      setOpen(false);
      setActiveStep(0);
    } else {
      setActiveStep(nextActiveStep);
    }
  };

  const handleBack = () => {
    const nextActiveStep = activeStep - 1;

    if (nextActiveStep < 0) {
      setOpen(false);
      setActiveStep(0);
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
