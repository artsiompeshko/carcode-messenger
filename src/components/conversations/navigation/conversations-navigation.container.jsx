/* eslint-disable no-inner-declarations */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { DEALERS_PATH, DEALERS_SEARCH_PATH } from 'core/constants/api.constant';

import { allActions } from 'core/actions';
import { dealersService } from 'core/dealers';

import ConversationsNavigation from './conversations-navigation.presentation';

const mockSearchDealers = [
  {
    dealerId: 438872,
    rooftopDealerId: 21256,
    dealerName: 'SD Test Dealer 02',
    dealerPhoneNumbers: [
      {
        label: 'sales',
        number: '+15417053415',
      },
      {
        label: 'edmunds.com',
        number: '+12132909177',
      },
      {
        label: 'service',
        number: '+13306795293',
      },
    ],
    distanceInMiles: 3.032372713072033,
    online: false,
  },
  {
    dealerId: 375103,
    rooftopDealerId: 1876796,
    dealerName: 'Belarus Dealer Origin',
    dealerPhoneNumbers: [
      {
        label: 'sales',
        number: '+17158022403',
      },
      {
        label: 'service',
        number: '+14805265988',
      },
      {
        label: 'edmunds.com',
        number: '+18506796669',
      },
    ],
    distanceInMiles: 3.4153426652232843,
    online: false,
  },
  {
    dealerId: 346506,
    rooftopDealerId: 879,
    dealerName: 'origin dealer 1',
    dealerPhoneNumbers: [
      {
        label: 'sales',
        number: '+13343774653',
      },
      {
        label: 'service',
        number: '+13367938375',
      },
      {
        label: 'edmunds.com',
        number: '+17653510055',
      },
    ],
    distanceInMiles: 4.020119835200074,
    online: false,
  },
  {
    dealerId: 369332,
    rooftopDealerId: 879,
    dealerName: 'origin dealer 2',
    dealerPhoneNumbers: [
      {
        label: 'sales',
        number: '+13346038968',
      },
      {
        label: 'edmunds.com',
        number: '+15109453147',
      },
      {
        label: 'service',
        number: '+19312728176',
      },
    ],
    distanceInMiles: 4.020119835200074,
    online: false,
  },
  {
    dealerId: 389121,
    rooftopDealerId: 879,
    dealerName: 'Test Soloveva',
    dealerPhoneNumbers: [
      {
        label: 'service',
        number: '+14327550740',
      },
      {
        label: 'edmunds.com',
        number: '+14237992695',
      },
      {
        label: 'sales',
        number: '+16195691750',
      },
    ],
    distanceInMiles: 4.020119835200074,
    online: false,
  },
];

const ConversationsNavigationContainer = () => {
  const [loading, setLoading] = useState(false);
  const dealers = useSelector(state => state.dealers.list);
  const dispatch = useDispatch();
  const visitorId = useSelector(state => state.customer.visitorId);

  const handleSearch = search => {
    if (search) {
      const path = DEALERS_SEARCH_PATH;
      setLoading(true);

      async function loadDealers() {
        // const result = await fetch(`${path}?radius=10&zipcode=90024`).then(response => {
        //   return response.json();
        // });

        dispatch(allActions.dealersActions.setDealers(dealersService.mapForSearch(mockSearchDealers)));

        setLoading(false);
      }

      loadDealers();
    } else {
      const path = DEALERS_PATH.replace(':visitorId', visitorId);
      setLoading(true);

      async function loadInitialDealers() {
        const result = await fetch(path).then(response => {
          return response.json();
        });

        dispatch(allActions.dealersActions.setDealers(result));

        setLoading(false);
      }

      loadInitialDealers();
    }
  };

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

  return <ConversationsNavigation dealers={dealers} loading={loading} handleSearch={handleSearch} />;
};

export default ConversationsNavigationContainer;
