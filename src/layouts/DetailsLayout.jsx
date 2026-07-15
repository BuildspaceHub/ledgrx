import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const TITLES = {
  "/history": "Transaction History",
  "/analytics": "Analytics",
  "/settings": "Settings",
};

export default function DetailLayout() {
  const { pathname } = useLocation();
  return (
    <div className="pt-16">
      <PageHeader pageName={TITLES[pathname] ?? ""} />
      <Outlet />
    </div>
  );
}
