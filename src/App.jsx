
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/auth/AuthProvider';
import LoginPage from './components/auth/LoginPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';
import AdmissionSystem from './components/admission/AdmissionSystem';
import UnauthorizedPage from './components/auth/UnauthorizedPage';

// Role-specific dashboard components
import ProfessionalCounseling from './components/counseling/ProfessionalCounseling';
import CampusCounseling from './components/counseling/CampusCounseling';
import DomainCounseling from './components/counseling/DomainCounseling';
import AdmissionCounseling from './components/counseling/AdmissionCounseling';

const AppRoutes = () => {
  const { isAuthenticated, currentUser, login } = useAuth();

  // Redirect to role-specific dashboard if authenticated
  const getHomePage = () => {
    if (!isAuthenticated || !currentUser) {
      return <LoginPage onLogin={login} />;
    }

    // Redirect based on role
    switch (currentUser.role) {
      case 'professional': return <Navigate to="/professional" />;
      case 'campus': return <Navigate to="/campus" />;
      case 'domain': return <Navigate to="/domain" />;
      case 'admission': return <Navigate to="/admission" />;
      case 'admin': return <Navigate to="/dashboard" />;
      default: return <Navigate to="/dashboard" />;
    }
  };

  return (
    <Routes>
      <Route path="/login" element={!isAuthenticated ? <LoginPage onLogin={login} /> : <Navigate to="/" />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Role-specific routes */}
      <Route path="/professional" element={
        <ProtectedRoute allowedRoles={['professional', 'admin']}>
          <Layout>
            <ProfessionalCounseling />
          </Layout>
        </ProtectedRoute>
      } />

      <Route path="/campus" element={
        <ProtectedRoute allowedRoles={['campus', 'admin']}>
          <Layout>
            <CampusCounseling />
          </Layout>
        </ProtectedRoute>
      } />

      <Route path="/domain" element={
        <ProtectedRoute allowedRoles={['domain', 'admin']}>
          <Layout>
            <DomainCounseling />
          </Layout>
        </ProtectedRoute>
      } />

      <Route path="/admission" element={
        <ProtectedRoute allowedRoles={['admission', 'admin']}>
          <Layout>
            <AdmissionCounseling />
          </Layout>
        </ProtectedRoute>
      } />

      {/* Full admission system for admin */}
      <Route path="/dashboard" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <Layout>
            <AdmissionSystem />
          </Layout>
        </ProtectedRoute>
      } />

      {/* Default route */}
      <Route path="/" element={getHomePage()} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
