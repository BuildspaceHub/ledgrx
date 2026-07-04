import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Onboarding from "./components/Onboarding";
import Splash from "./components/Splash";
import CreatePasswordPage from "./pages/CreatePasswordPage";
import VerifiedEmailPage from "./pages/VerifiedEmailPage";
import ConfirmEmailPage from "./pages/ConfirmEmailPage";
import ConfirmPasswordPage from "./pages/ConfirmPasswordPage";
import Dashboard from "./components/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="lg:bg-green-300 h-screen w-screen flex justify-center items-center flex-col">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          {/* Authentication Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/reset-password" element={<CreatePasswordPage />} />
          <Route path="/auth/verify-email" element={<ConfirmEmailPage />} />
          <Route
            path="/auth/forgot-password"
            element={<ConfirmPasswordPage />}
          />
          <Route path="/auth/user-verified" element={<VerifiedEmailPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
