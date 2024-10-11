import { Navigate } from "react-router-dom";


export const PublicRouter = ({ children }) => {
   
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    return (!email || !password) ? children : <Navigate to="/home" />
}
