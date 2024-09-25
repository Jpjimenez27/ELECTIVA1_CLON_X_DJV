import React from 'react'

const Login = ({isOpen, closeModal}) => {
  if (!isOpen) return null;

  return (
    <div>Login</div>
  );
};

export default Login;