import { BrowserRouter, Route, Routes } from "react-router";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Onboarding from "./pages/Onboarding";
import VerifiedEmailPage from "./pages/auth/VerifiedEmailPage";
import ConfirmEmailPage from "./pages/auth/ConfirmEmailPage";
import Dashboard from "./pages/dashboard";
import History from "./pages/History";
import Splash from "./pages/Splash";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import ResetPasswordPage from "./pages/auth/ResetPassword";

export default function App() {
  return (
    <BrowserRouter>
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
