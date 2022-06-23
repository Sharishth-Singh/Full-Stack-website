import { authConstants } from "./constant";
export const login = (user) => {
   // console.log(user);
   return async (dispatch) => {
      dispatch({ 
         type: authConstants.LOGIN_REQUEST,
         payload: {
            ...user
         }
      });
   }
}
