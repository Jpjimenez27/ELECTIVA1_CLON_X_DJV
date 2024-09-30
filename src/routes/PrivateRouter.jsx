import { useContext } from "react";
import { UserContext } from "../auth/contexts/UserContext";
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRouter = ({ children }) => {
  const { logged } = useContext(UserContext);
  const { pathname } = useLocation();
  localStorage.setItem('lastPath', pathname);
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  return (email && password) ? children : <Navigate to="/" />
}