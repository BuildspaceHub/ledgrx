import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Onboarding from "./pages/Onboarding";
import VerifiedEmailPage from "./pages/auth/VerifiedEmailPage";
import ConfirmEmailPage from "./pages/auth/ConfirmEmailPage";
import Dashboard from "./pages/dashboard";
import TransactionHistory from "./pages/TransactionHistory";
import Splash from "./pages/Splash";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import ResetPasswordPage from "./pages/auth/ResetPassword";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import DashboardLayout from "./layouts/DashboardLayout";
import TabLayout from "./layouts/TabLayout";
import DetailLayout from "./layouts/DetailsLayout";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        {/* Authentication Routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
        <Route path="/auth/verify-email" element={<ConfirmEmailPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/auth/user-verified" element={<VerifiedEmailPage />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route element={<TabLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route element={<DetailLayout />}>
              <Route path="/history" element={<TransactionHistory />} />
              <Route path="/history/:id" element={<TransactionHistory />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>

      <ToastContainer />
    </>
  );
}
