import { Navigate } from "react-router-dom";
import { validateToken } from "../services/authService";


export const PublicRouter = ({ children }) => {
   
    const isvalidToken = validateToken();
    return (!isvalidToken) ? children : <Navigate to="/home" />
}
