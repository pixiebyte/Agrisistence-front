// src/pages/Auth.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const Auth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default Auth;
