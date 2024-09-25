import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css'; 
import App from './App'
import { UserProvider } from './auth/contexts/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>
);