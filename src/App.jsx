import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Onboarding from "./pages/Onboarding";
import CreatePasswordPage from "./pages/auth/CreatePasswordPage";
import VerifiedEmailPage from "./pages/auth/VerifiedEmailPage";
import ConfirmEmailPage from "./pages/auth/ConfirmEmailPage";
import ConfirmPasswordPage from "./pages/auth/ConfirmPasswordPage";
import Splash from "./pages/Splash";

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
        <Route path="/auth/reset-password" element={<CreatePasswordPage />} />
        <Route path="/auth/verify-email" element={<ConfirmEmailPage />} />
        <Route path="/auth/forgot-password" element={<ConfirmPasswordPage />} />
        <Route path="/auth/user-verified" element={<VerifiedEmailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
