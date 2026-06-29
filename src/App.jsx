import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Onboarding from "./components/Onboarding";
import Splash from "./components/Splash";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-semibold text-2xl text-center p-px md:w-100% h-screen md:py-10 md:bg-green-300 md:px-10">
        {/* Welcome to Ledgr<span className="text-green-500">X</span> */}
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
