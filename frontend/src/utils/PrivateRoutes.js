import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({Component: component, ...rest}) => {
    let {user} = useContext(AuthContext)
    return (
        <Route {...rest}>{!user ? <Redirect to="/title" /> : component}</Route>
    )
}

export default PrivateRoute;