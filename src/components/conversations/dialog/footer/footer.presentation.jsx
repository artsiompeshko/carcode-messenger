import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Input } from './input';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    borderTop: '1px solid #eaeaea',
  },
}));

const Footer = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Input handleSubmit={handleSubmit} />
    </div>
  );
};

Footer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Footer;
