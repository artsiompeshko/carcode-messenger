import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { DEALERS_PATH } from 'core/constants/api.constant';

import { allActions } from 'core/actions';

import ConversationsNavigation from './conversations-navigation.presentation';

const ConversationsNavigationContainer = () => {
  const [loading, setLoading] = useState(false);
  const dealers = useSelector(state => state.dealers.list);
  const dispatch = useDispatch();
  const visitorId = useSelector(state => state.customer.visitorId);

  useEffect(() => {
    const path = DEALERS_PATH.replace(':visitorId', visitorId);
    setLoading(true);

    async function loadDealers() {
      const result = await fetch(path).then(response => {
        return response.json();
      });

      dispatch(allActions.dealersActions.setDealers(result));

      setLoading(false);
    }

    loadDealers();
  }, []);

  return <ConversationsNavigation dealers={dealers} loading={loading} />;
};

export default ConversationsNavigationContainer;
