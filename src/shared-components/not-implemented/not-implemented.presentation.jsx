import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import { NavigationHeader } from 'shared-components/navigation-header';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2, 3),
  },
}));

const NotImplemented = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Hidden mdUp>
        <NavigationHeader backTo="/">Not Implemented</NavigationHeader>
      </Hidden>
      <div className={classes.content}>
        <Typography>Not Implemented</Typography>
      </div>
    </Grid>
  );
};

export default NotImplemented;
