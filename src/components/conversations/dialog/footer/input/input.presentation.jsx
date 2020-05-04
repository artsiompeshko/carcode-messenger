import React from 'react';

import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  input: {
    width: '100%',
    padding: theme.spacing(1, 1),
  },
}));

const CarcodeInput = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input className={classes.input} placeholder="Type a message" inputProps={{ 'aria-label': 'description' }} />
    </form>
  );
};

export default CarcodeInput;
