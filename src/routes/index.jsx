import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/login';
import PasswordResetRequest from '../pages/auth/PasswordResetRequest';
import Profissionais from '../pages/profissionais';
import Cadastro from '../pages/profissionais/cadastro-de-profissionais';
// import NotFound from '../pages/NotFound'; // descomente se tiver página de 404

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/passwordResetRequest" element={<PasswordResetRequest />} />
      <Route path="/profissionais" element={<Profissionais />} />
      <Route path="/profissionais/cadastro-de-profissionais" element={<Cadastro />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
