import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
   return <Route {...rest} component = { (porps) =>{
      const token = window.localStorage.getItem('token');
      if(token){
         return <Component {...porps}/>
      }else{
         return <Redirect to={`/signin`} />
      }
   }} />
}

export default PrivateRoute;
