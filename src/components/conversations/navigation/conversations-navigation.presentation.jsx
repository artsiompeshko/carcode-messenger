import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

import AccountCircle from '@material-ui/icons/AccountCircle';

import { NavigationHeader } from 'shared-components/navigation-header';
import { ListItemLink } from 'shared-components/list-item-link';

import { dealersService } from 'core/dealers';
import { Search } from './search';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  list: {
    borderRadius: theme.shape.borderRadius,
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
    margin: '0 auto',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  rating: {
    fontSize: '1rem',
  },
}));

const ConversationsNavigation = ({ dealers, loading, handleSearch }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Hidden mdUp>
        <NavigationHeader backTo="/">Conversations</NavigationHeader>
      </Hidden>
      {loading ? (
        <LinearProgress className={classes.progress} />
      ) : (
        <>
          <Search handleSubmit={handleSearch} />
          <List className={classes.list}>
            {dealers?.map(dealer => (
              <ListItemLink key={dealer.dealerId} to={`/conversations/${dealersService.getDefaultNumber(dealer)}`}>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircle />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={dealer.dealerName}
                  secondary={dealer.distanceInMiles ? `~${dealer.distanceInMiles} miles` : null}
                />
                {dealer?.distanceInMiles && (
                  <ListItemSecondaryAction>
                    <div className={classes.info}>
                      <Rating className={classes.rating} name="read-only" value={dealer.rating} readOnly />
                    </div>
                  </ListItemSecondaryAction>
                )}
              </ListItemLink>
            ))}
          </List>
        </>
      )}
    </Grid>
  );
};

ConversationsNavigation.defaultProps = {
  dealers: [],
  loading: false,
};

ConversationsNavigation.propTypes = {
  loading: PropTypes.bool,
  dealers: PropTypes.arrayOf(PropTypes.shape({})),
  handleSearch: PropTypes.func.isRequired,
};

export default ConversationsNavigation;
