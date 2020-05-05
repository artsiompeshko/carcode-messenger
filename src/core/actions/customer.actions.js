import { SET_VISITOR_ID } from 'core/constants/actions.constant';

const setVisitorId = visitorId => {
  return {
    type: SET_VISITOR_ID,
    payload: visitorId,
  };
};

export default {
  setVisitorId,
};
