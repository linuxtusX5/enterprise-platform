import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, useMatch } from 'react-router-dom';
import Home from './views/pages/Home';
import Dashboard from './layouts/dashboard-layout/DashboardSidebarnavigation';
import NotFoundPage from './views/pages/NotFoundPage';
import { LinearProgress } from '@material-ui/core';

// Lazy-loaded components
const About = lazy(() => import('./views/pages/About_Page'));
const DashboardDefaultContent = lazy(
  () => import('./views/Dashboard/DashboardDefaultContent'),
);
const SettingsandPrivacy = lazy(
  () => import('./views/Dashboard/SettingsandPrivacy'),
);

export default function RoutesComponent() {
  const match = useMatch('/dashboard/*');
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardDefaultContent />} />
          <Route path="settings-and-privacy" element={<SettingsandPrivacy />} />
        </Route>
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Suspense>
  );
}
