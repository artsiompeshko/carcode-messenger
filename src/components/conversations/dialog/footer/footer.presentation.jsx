import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Input } from './input';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Input />
    </div>
  );
};

export default Footer;
