import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../contextAPi/UserContext';

const PrivetRoute = ({children}) => {
  const {loading,user} = useContext(myContext)
  const location = useLocation()
  if(loading){
    return  <p> loadding ...</p>
  }

  if(user && user?.uid){
    return children
  }
  return <Navigate to ='/login' state={{from : location}} replace></Navigate>
  
};

export default PrivetRoute;