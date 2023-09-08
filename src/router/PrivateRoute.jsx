import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { pathname, search } = useLocation();
    const { logged } = useContext(AuthContext);

    const lastPath = pathname + search;
    localStorage.setItem("lastPath", lastPath);

    return logged ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
