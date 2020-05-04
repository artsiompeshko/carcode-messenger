import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import { makeStyles } from '@material-ui/core/styles';

import { NavigationHeader } from 'shared-components/navigation-header';

import { Messages } from './messages';
import { Footer } from './footer';

const mockDialogProps = {
  dealer: {
    name: 'Honda Of Plymouth',
  },
  dialog: [
    {
      id: 1,
      body: 'Hello, I am interested in BMW x6',
      type: 'message',
    },
    {
      id: 1,
      body: 'Hello, will be glad to help you!',
      type: 'reply',
    },
  ],
};

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
  },
  header: {
    flexShrink: '0',
  },
}));

const Dialog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <div className={classes.header}>
          <NavigationHeader backTo="/conversations">{mockDialogProps.dealer.name}</NavigationHeader>
        </div>
      </Hidden>
      <div className={classes.content}>
        <Messages messages={mockDialogProps.dialog} />
        <Footer />
      </div>
    </div>
  );
};

export default Dialog;
