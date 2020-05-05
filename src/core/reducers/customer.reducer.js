import { SET_VISITOR_ID } from 'core/constants/actions.constant';

import { cookieService } from 'core/cookie';

const customerReducer = (
  state = {
    visitorId: cookieService.get('visitorId'),
  },
  action,
) => {
  switch (action.type) {
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
