import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { allActions } from 'core/actions';

import { useSelector, useDispatch } from 'react-redux';

import ConversationsNavigation from './conversations-navigation.presentation';

const mockDealers = [
  {
    id: 1,
    name: 'Honda Of Plymouth',
    phoneNumber: '+113346038968',
  },
];

const ConversationsNavigationContainer = () => {
  const dealers = useSelector(state => state.dealers.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.dealersActions.setDealers(mockDealers));
  }, []);

  return <ConversationsNavigation dealers={dealers} />;
};

export default ConversationsNavigationContainer;
