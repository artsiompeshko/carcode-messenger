import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as DomRouter, Switch, Route, Link } from 'react-router-dom';

import { Navigation } from 'components/navigation';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import { routes } from './routes';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    background: '#aa4b6b' /* fallback for old browsers */,
    background: '-webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b)' /* Chrome 10-25, Safari 5.1-6 */,
    background:
      'linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  rootFilter: {
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.4) 0%,rgba(0,0,0,.6) 75%,rgba(0,0,0,.8) 100%)',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'transparent',
    boxShadow: 'none',
  },
  content: {
    flexGrow: 1,
    padding: `10px ${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: '20px',
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  routeRoot: {
    flexGrow: 1,
    height: '100%',
  },
  paper: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      borderRadius: '0',
    },
  },
}));

const Router = ({ width }) => {
  const classes = useStyles();

  return (
    <DomRouter>
      <section className={classes.root}>
        <Hidden mdDown>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Link to="/" className={classes.link}>
                <Typography variant="h6" noWrap>
                  CarCode Messenger
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </Hidden>
        <Hidden mdDown>
          <Navigation />
        </Hidden>
        <main className={classes.content}>
          <Hidden mdDown>
            <div className={classes.toolbar} />
          </Hidden>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={route.path} {...route} width={width} />
            ))}
          </Switch>
        </main>
      </section>
    </DomRouter>
  );
};

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  const classes = useStyles();

  const routeData = route[route.width] || route.default;

  const renderRoute = () => (
    <Route
      path={route.path}
      exact={!!route.exact}
      render={props => (
        <Grid className={classes.routeRoot} container spacing={isWidthUp('md', route.width) ? 3 : 0}>
          {routeData?.aside?.component && (
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <routeData.aside.component />
              </Paper>
            </Grid>
          )}
          <Grid item xs>
            {routeData.main.paper ? (
              <Paper className={classes.paper}>
                <routeData.main.component {...props} routes={route.routes} />
              </Paper>
            ) : (
              <routeData.main.component {...props} routes={route.routes} />
            )}
          </Grid>
        </Grid>
      )}
    />
  );

  return renderRoute();
}

Router.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(Router);
