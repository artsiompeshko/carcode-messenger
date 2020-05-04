import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useDealers } from 'core/hooks';

import ConversationsNavigation from './conversations-navigation.presentation';

const ConversationsNavigationContainer = () => {
  const dealers = useSelector(state => state.dealers.list);

  useDealers();

  return <ConversationsNavigation dealers={dealers} />;
};

export default ConversationsNavigationContainer;
