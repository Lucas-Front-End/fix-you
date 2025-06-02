import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import PasswordResetRequest from "../pages/auth/PasswordResetRequest";
// import NotFound from '../pages/NotFound'; // descomente se tiver página de 404

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/passwordResetRequest" element={<PasswordResetRequest />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
