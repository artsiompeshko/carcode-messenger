import useFetch from 'use-http';
import { useSelector, useDispatch } from 'react-redux';

import { DEALERS_PATH } from 'core/constants/api.constant';

import { allActions } from 'core/actions';

export default () => {
  const chatterSessionId = useSelector(state => state.customer.chatterSessionId);
  const dispatch = useDispatch();

  const options = {};

  const { loading, error, data } = useFetch(DEALERS_PATH.replace(':chatterSessionId', chatterSessionId), options, []);

  if (!loading && data) {
    dispatch(allActions.dealersActions.setDealers(data));
  }

  return [loading, error, data];
};
