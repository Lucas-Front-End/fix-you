import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/login';
import PasswordResetRequest from '../pages/auth/PasswordResetRequest';
import CodeValidationRequest from '../pages/auth/codeValidationRequest';
import NewPassword from '../pages/auth/NewPassword'; // descomente se tiver página de nova senha
// import NotFound from '../pages/NotFound'; // descomente se tiver página de 404

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/passwordResetRequest" element={<PasswordResetRequest />} />
      <Route path="/codeValidationRequest" element={<CodeValidationRequest />} />
      <Route path="/newPassword" element={<NewPassword />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
