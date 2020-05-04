import { SET_CHATTER_SESSION_ID, SET_VISITOR_ID } from 'core/constants/actions.constant';

import { cookieService } from 'core/cookie';

const customerReducer = (
  state = {
    chatterSessionId: cookieService.get('chatterSessionId'),
    visitorId: cookieService.get('visitorId'),
  },
  action,
) => {
  switch (action.type) {
    case SET_CHATTER_SESSION_ID:
      cookieService.set('chatterSessionId', action.payload);

      return {
        ...state,
        chatterSessionId: action.payload,
      };
    case SET_VISITOR_ID:
      cookieService.set('visitorId', action.payload);

      return {
        ...state,
        visitorId: action.payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
