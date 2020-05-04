import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { makeStyles } from '@material-ui/core/styles';

import { InstallingModal } from 'components/installing-modal';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1, 2),
  },
  arrowBack: {
    marginRight: '16px',
    color: theme.palette.common.white,
  },
  navLink: {
    display: 'flex',
  },
}));

const NavigationHeader = ({ backTo, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavLink to={backTo} className={classes.navLink}>
        <KeyboardBackspaceIcon className={classes.arrowBack} />
      </NavLink>
      {children}
      <InstallingModal />
    </div>
  );
};

NavigationHeader.propTypes = {
  backTo: PropTypes.string.isRequired,
};

export default NavigationHeader;
