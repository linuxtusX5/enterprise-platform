import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/pages/Home';
import Dashboard from './layouts/dashboard-layout/DashboardSidebarnavigation';
import NotFoundPage from './views/pages/NotFoundPage';
import { LinearProgress } from '@material-ui/core';
import ProtectedRoute from './components/protected-route';

// Lazy-loaded components
const About = lazy(() => import('./views/pages/About_Page'));
const DashboardDefaultContent = lazy(
  () => import('./views/Dashboard/DashboardDefaultContent'),
);

const ProductListView = lazy(
  () => import('./views/Dashboard/product/ProductListView'),
);
const ProductCreateView = lazy(
  () => import('./views/Dashboard/product/ProductCreateView'),
);
const LoginPage = lazy(() => import('./views/pages/auth/LoginPage'));
const Calendar = lazy(() => import('./views/Dashboard/calendar/CalendarView'));

export default function RoutesComponent() {
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardDefaultContent />} />
          <Route path="list-products" element={<ProductListView />} />
          <Route path="create-product" element={<ProductCreateView />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>

        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}
