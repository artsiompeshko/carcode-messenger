import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import AccountCircle from '@material-ui/icons/AccountCircle';

import { NavigationHeader } from 'shared-components/navigation-header';
import { ListItemLink } from 'shared-components/list-item-link';

const mockLinks = [
  {
    id: 1,
    dealerName: 'Honda Of Plymouth',
  },
];

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

const ConversationsNavigation = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Hidden mdUp>
        <NavigationHeader backTo="/">Conversations</NavigationHeader>
      </Hidden>
      <List className={classes.list}>
        {mockLinks.map(link => (
          <ListItemLink key={link.id} to={`/conversations/${link.id}`}>
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={link.dealerName} />
          </ListItemLink>
        ))}
      </List>
    </Grid>
  );
};

export default ConversationsNavigation;
