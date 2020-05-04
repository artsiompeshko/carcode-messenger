import { combineReducers } from 'redux';

import dealers from './dealers.reducer';
import customer from './customer.reducer';

const rootReducer = combineReducers({
  dealers,
  customer,
});

export { rootReducer };
