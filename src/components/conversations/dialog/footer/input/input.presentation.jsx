import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  input: {
    width: '100%',
    padding: theme.spacing(1, 1),
  },
}));

const CarcodeInput = ({ search, handleSubmit, handleSearch }) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <Input
        onChange={handleSearch}
        className={classes.input}
        placeholder="Type a message"
        value={search}
        inputProps={{ 'aria-label': 'description' }}
      />
    </form>
  );
};

CarcodeInput.defaultProps = {
  search: '',
};

CarcodeInput.propTypes = {
  search: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default CarcodeInput;
