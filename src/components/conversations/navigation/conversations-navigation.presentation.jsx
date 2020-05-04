import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import AccountCircle from '@material-ui/icons/AccountCircle';

import { NavigationHeader } from 'shared-components/navigation-header';
import { ListItemLink } from 'shared-components/list-item-link';

import { dealersService } from 'core/dealers';

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
}));

const ConversationsNavigation = ({ dealers }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Hidden mdUp>
        <NavigationHeader backTo="/">Conversations</NavigationHeader>
      </Hidden>
      <List className={classes.list}>
        {dealers?.map(dealer => (
          <ListItemLink key={dealer.dealerId} to={`/conversations/${dealersService.getDefaultNumber(dealer)}`}>
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dealer.dealerName} />
          </ListItemLink>
        ))}
      </List>
    </Grid>
  );
};

ConversationsNavigation.defaultProps = {
  dealers: [],
};

ConversationsNavigation.propTypes = {
  dealers: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ConversationsNavigation;
