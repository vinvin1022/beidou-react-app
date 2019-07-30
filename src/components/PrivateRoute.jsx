import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({ component: Component, ...props }) => {
  return (<Route {...props} render={(p) => {
    const token = sessionStorage.getItem('token');
    return token ? <Component></Component> : <Redirect to={'/login'} />
  }}></Route>)
}


export default PrivateRoute