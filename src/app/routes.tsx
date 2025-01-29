import React from 'react';
import { Route, Routes, Navigate, useMatch } from 'react-router-dom';
import Home from './views/pages/Home';
import About from './views/pages/About_Page';
import Dashboard from './layouts/dashboard-layout/DashboardSidebarnavigation';
import Login from './views/pages/Login';
import NotFoundPage from './views/pages/NotFoundPage';
import DashboardDefaultContent from './views/Dashboard/DashboardDefaultContent';
import SettingsandPrivacy from './views/Dashboard/SettingsandPrivacy';

export default function RoutesComponent() {
  const match = useMatch('/dashboard/*');
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardDefaultContent />} />
        <Route path="settings-and-privacy" element={<SettingsandPrivacy />} />
      </Route>
      <Route path="/" element={<DashboardDefaultContent />} />
      <Route path="/settings-and-privacy" element={<SettingsandPrivacy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
}
