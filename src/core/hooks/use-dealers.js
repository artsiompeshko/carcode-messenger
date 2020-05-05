import useFetch from 'use-http';
import { useSelector, useDispatch } from 'react-redux';

import { DEALERS_PATH } from 'core/constants/api.constant';

import { allActions } from 'core/actions';

const mockDealers = [
  {
    customerInfoDto: {
      chatterSessionId: '10.221.0.179.1551276592364883_1587117972986',
      visitorId: '10.221.0.179.1551276592364883',
    },
    phoneNumberDto: {
      label: 'sales',
      number: '+13346038968',
    },
    dealerName: 'origin dealer 2',
    dealerId: 369332,
    dealerRooftopId: 879,
  },
  {
    customerInfoDto: {
      chatterSessionId: '10.221.0.179.1551276592364883_1588585048187',
      visitorId: '10.221.0.179.1551276592364883',
    },
    phoneNumberDto: {
      label: 'sales',
      number: '+13252080312',
    },
    dealerName: 'DH Origin Ford Toyota',
    dealerId: 351078,
    dealerRooftopId: 1532,
  },
  {
    customerInfoDto: {
      chatterSessionId: '10.221.0.179.1551276592364883_1588586810386',
      visitorId: '10.221.0.179.1551276592364883',
    },
    phoneNumberDto: {
      label: 'sales',
      number: '+12082699287',
    },
    dealerName: 'DH FBMK Direct',
    dealerId: 351079,
    dealerRooftopId: 21104,
  },
];

export default () => {
  const visitorId = useSelector(state => state.customer.visitorId);
  const dispatch = useDispatch();

  const options = {};

  const { loading, error, data } = useFetch(DEALERS_PATH.replace(':visitorId', visitorId), options, []);

  if (!loading && data) {
    dispatch(allActions.dealersActions.setDealers(data));
  }

  return [loading, error, data];
};
