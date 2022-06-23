import {act} from 'react-dom/test-utils';
import { authConstants } from '../actions/constant';

const initState = {
   name: 'Sharishth'
};

export default (state = initState, action) => {

   console.log(action);

   switch(action.type){
      case authConstants.LOGIN_REQUEST:
         state = {
            ...state,
            ...action.payload
         }
         break;
   }


   return state;
}
