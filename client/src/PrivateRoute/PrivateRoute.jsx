import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = (props) => {
  const { component: Component } = props;
  const { state } = useContext(AuthContext);
  const { isAuthenticated } = state;

  if (isAuthenticated) {
    console.log('Check isAuthenticated', isAuthenticated);
    return <Component />;
  }

  return <Navigate to="/login" />;
};
export default PrivateRoute;
