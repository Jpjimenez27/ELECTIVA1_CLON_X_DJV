import { Navigate } from "react-router-dom";
import { UserContext } from "../auth/contexts/UserContext";
import { useContext } from "react";

export const PublicRouter = ({ children }) => {
    const { logged } = useContext(UserContext);
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    return (!email || !password) ? children : <Navigate to="/home" />
}
