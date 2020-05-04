import { SET_CHATTER_SESSION_ID, SET_VISITOR_ID } from 'core/constants/actions.constant';

const setChatterSessionId = chatterSessionId => {
  return {
    type: SET_CHATTER_SESSION_ID,
    payload: chatterSessionId,
  };
};

const setVisitorId = visitorId => {
  return {
    type: SET_VISITOR_ID,
    payload: visitorId,
  };
};

export default {
  setChatterSessionId,
  setVisitorId,
};
