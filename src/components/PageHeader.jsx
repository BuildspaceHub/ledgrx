import { useOutletContext } from "react-router-dom";
import BackButton from "./BackButton";

export default function PageHeader({ pageName }) {
  return (
    <div className="flex items-center gap-5 fixed top-0 right-0 left-0 h-16 px-2 z-40 bg-secondary">
      <BackButton />
      <h1 className="text-md font-semibold">{pageName}</h1>
    </div>
  );
}
