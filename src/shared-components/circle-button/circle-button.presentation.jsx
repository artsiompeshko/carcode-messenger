import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  rounded: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '2px solid white',
    width: '64px',
    height: '64px',
    marginBottom: '16px',
    cursor: 'pointer',
    '&:hover, &:focus': {
      background: 'rgba(255,255,255,0.12)',
    },
  },
  title: {
    color: theme.palette.common.white,
  },
}));

const CircleButton = ({ Icon, title }) => {
  const classes = useStyles();

  return (
    <div role="button" className={classes.root}>
      <div className={classes.rounded}>
        <Icon htmlColor="white" />
      </div>
      <Typography className={classes.title} variant="subtitle1">
        {title}
      </Typography>
    </div>
  );
};

CircleButton.defaultProps = {
  title: null,
};

CircleButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string,
};

export default CircleButton;
