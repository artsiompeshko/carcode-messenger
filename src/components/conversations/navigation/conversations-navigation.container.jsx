import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useDealers } from 'core/hooks';

import ConversationsNavigation from './conversations-navigation.presentation';

const ConversationsNavigationContainer = () => {
  const dealers = useSelector(state => state.dealers.list);

  const [loading] = useDealers();

  return <ConversationsNavigation dealers={dealers} loading={loading} />;
};

export default ConversationsNavigationContainer;
