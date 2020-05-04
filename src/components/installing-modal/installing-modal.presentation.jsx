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
}));

const InstallingModal = ({ open, activeStepIndx, steps, handleOpen, handleNext, handleBack, handleClose }) => {
  const classes = useStyles();
  const activeStep = steps[activeStepIndx];

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen} className={classes.installBtn}>
        Install
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullScreen>
        <DialogTitle id="alert-dialog-slide-title">Installing CarCode Messenger...</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStepIndx} alternativeLabel>
            {steps.map(step => (
              <Step key={step.key}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className={classes.stepContent}>{activeStep.content}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBack} className={classes.backButton}>
            {activeStepIndx === 0 ? 'Close' : 'Back'}
          </Button>
          <Button color="primary" onClick={handleNext}>
            {activeStepIndx === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

InstallingModal.defaultProps = {
  open: false,
};

InstallingModal.propTypes = {
  open: PropTypes.bool,
  activeStepIndx: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default InstallingModal;
