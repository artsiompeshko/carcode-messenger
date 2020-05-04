import { SET_DEALERS } from 'core/constants/actions.constant';

const setDealers = dealers => {
  return {
    type: SET_DEALERS,
    payload: dealers,
  };
};

export default {
  setDealers,
};
