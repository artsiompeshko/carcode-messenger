import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  title: {
    margin: `${theme.spacing(0, 0, 3)}!important`,
  },
}));

const Start = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="subtitle2">
        In order to correctly install CarCode Messenger, please, go through all installation steps:
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Start
      </Button>
    </div>
  );
};

Start.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Start;
