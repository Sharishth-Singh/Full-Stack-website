import axios from "../helpers/axios";
import {authConstants} from "./constant";

export const login = (user) => {
   console.log(user); 
   return async (dispatch) => {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      const res = await axios.post('/admin/signin',{
         ...user
      });
      if(res.status === 200){
         const {token, user} = res.data;
         window.localStorage.setItem('token', token);
         window.localStorage.setItem('user', JSON.stringify(user));
         console.log(window.localStorage.getItem('token'));
         dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
               token,user
            }
         });
         console.log(token);
      }else{
         if(res.status === 400){
            dispatch({
               type: authConstants.LOGIN_FAILURE,
               payload: { error: res.data.error }
            });
         }
      }
      // dispatch({
      //    type: authConstants.LOGIN_REQUEST,
      //    payload: {
      //       ...user
      //    }
      // });
   }
}

export const isUserLoggedIn = () => {
   return async dispatch => {
      const token = localStorage.getItem('token');
      console.log(token);
      if(token){
         const user = JSON.parse( localStorage.getItem('user') );
         dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
               token,user
            }
         });
      }
      else{
         dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: 'Failed to login' }
         });
      }
   }
}
