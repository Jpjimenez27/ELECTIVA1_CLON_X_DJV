import { Navigate } from 'react-router-dom';
import { getUserIdByToken, validateToken } from './../services/authService';

export const PrivateRouter = ({ children }) => {

  const isvalidToken = validateToken();
 //getUserIdByToken();
  return (isvalidToken) ? children : <Navigate to="/" />
}