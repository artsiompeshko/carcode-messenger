import React from 'react';
import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';
import LinearProgress from '@material-ui/core/LinearProgress';

import { makeStyles } from '@material-ui/core/styles';

import { NavigationHeader } from 'shared-components/navigation-header';

import { Messages } from './messages';
import { Footer } from './footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%',
    justifyContent: 'center',
  },
  header: {
    flexShrink: '0',
  },
  progress: {
    width: '100px',
    margin: '0 auto',
  },
}));

const Dialog = ({ messages, dealer, isConnecting, handleSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <div className={classes.header}>
          <NavigationHeader backTo="/conversations">{dealer?.dealerName}</NavigationHeader>
        </div>
      </Hidden>
      <div className={classes.content}>
        {isConnecting ? (
          <LinearProgress className={classes.progress} />
        ) : (
          <>
            <Messages messages={messages} />
            <Footer handleSubmit={handleSubmit} />
          </>
        )}
      </div>
    </div>
  );
};

Dialog.defaultProps = {
  messages: null,
  dealer: null,
  isConnecting: false,
};

Dialog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({})),
  dealer: PropTypes.shape({
    dealerName: PropTypes.string.isRequired,
  }),
  isConnecting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
};

export default Dialog;
