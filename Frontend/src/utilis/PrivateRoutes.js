import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

const PrivateRoutes = () => {
  const { loginauth } = useContext(LoginContext);

  return loginauth ? <Outlet /> : <Navigate to="/auth/kokebpension" />;
};

export default PrivateRoutes;
