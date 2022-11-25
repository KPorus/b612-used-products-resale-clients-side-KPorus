import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import Loading from "../component/Loading"


/* 
1. only allow authenticated user to visit the route
2. 
3. Redirect user to the route they wanted to go before login
*/

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }
    
    if(user && user.uid){
       
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;