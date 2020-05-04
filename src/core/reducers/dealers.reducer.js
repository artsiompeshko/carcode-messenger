import { SET_DEALERS } from 'core/constants/actions.constant';

const dealersReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DEALERS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default dealersReducer;
