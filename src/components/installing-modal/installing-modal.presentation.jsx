import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepContent: {
    margin: theme.spacing(5, 0),
  },
  installBtn: {
    marginLeft: 'auto',
  },
  stepper: {
    paddingLeft: '0',
    paddingRight: '0',
  },
}));

const InstallingModal = ({
  open,
  activeStepIndx,
  steps,
  isInstalled,
  installQuery,
  handleOpen,
  handleNext,
  handleBack,
  handleClose,
  handleContinue,
}) => {
  const classes = useStyles();
  const activeStep = steps[activeStepIndx];
  const isReinstall = installQuery && isInstalled;
  const isLastStep = activeStepIndx === steps.length - 1;

  return (
    <>
      {isReinstall && (
        <Button variant="outlined" color="primary" className={classes.installBtn} onClick={handleOpen}>
          Reinstall
        </Button>
      )}
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullScreen>
        <DialogTitle id="alert-dialog-slide-title">Installing CarCode Messenger...</DialogTitle>
        <DialogContent>
          <Stepper className={classes.stepper} activeStep={activeStepIndx} alternativeLabel>
            {steps.map(step => (
              <Step key={step.key}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className={classes.stepContent}>
            <activeStep.ContentComponent handleSubmit={handleNext} />
          </div>
        </DialogContent>
        <DialogActions>
          {isReinstall && !isLastStep && (
            <Button onClick={handleClose} className={classes.backButton}>
              Close
            </Button>
          )}
          {isLastStep && (
            <Button color="primary" onClick={handleContinue}>
              Continue Messaging
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

InstallingModal.defaultProps = {
  open: false,
  isInstalled: false,
  installQuery: false,
};

InstallingModal.propTypes = {
  open: PropTypes.bool,
  activeStepIndx: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isInstalled: PropTypes.bool,
  installQuery: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default InstallingModal;
