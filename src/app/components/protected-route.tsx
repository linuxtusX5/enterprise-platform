import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

import { saveClaimsAction } from 'features/auth/authSlice';
import { ClaimsType } from 'app/models/claims-type';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  try {
    const decoded: ClaimsType = jwtDecode(token);
    const expiresAt = decoded.exp * 1000;
    const dateNow = Date.now();
    const isValid = dateNow <= expiresAt;

    if (!isValid) {
      localStorage.clear();
      return <Navigate to="/login" />;
    }

    dispatch(saveClaimsAction(decoded));
    return <>{children}</>;
  } catch (error) {
    localStorage.clear();
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
