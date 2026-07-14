import { GrAnalytics } from "react-icons/gr";
import BackButton from "../components/BackButton";

export default function Analytics() {
  return (
    <div>
      <div className="size-30 mx-auto my-5">
        <GrAnalytics className="w-full h-full text-gray-300" />
      </div>
      <p className="text-gray-400 text-center">
        Analytics is not available yet
      </p>
    </div>
  );
}
