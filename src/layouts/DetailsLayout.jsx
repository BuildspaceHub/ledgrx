import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const getTitle = (path) => {
  if (path.includes("/history")) return "Transaction History";
  if (path.includes("/analytics")) return "Analytics";
  if (path.includes("/settings")) return "Settings";
  if (path.includes("/details")) return "Transaction Details";
  return "";
};

export default function DetailLayout() {
  const { pathname } = useLocation();
  return (
    <div className="w-full">
      <PageHeader pageName={getTitle(pathname)} />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
