// export default (state = {name: 'Sharishth'},action) => {
//    return state;
// }

import { combineReducers } from 'redux';
import authReducer from './auth.reducers';

const rootreducer = combineReducers({
   auth: authReducer
});

export default rootreducer;
