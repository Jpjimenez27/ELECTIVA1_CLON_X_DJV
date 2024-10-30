import { Navigate } from 'react-router-dom';
import { validateToken } from './../services/authService';

export const PrivateRouter = ({ children }) => {

  const isvalidToken = validateToken();

  return (isvalidToken) ? children : <Navigate to="/" />
}