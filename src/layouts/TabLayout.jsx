import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function TabLayout() {
  return (
    <div className="pt-16">
      <Header />
      <Outlet />
    </div>
  );
}
