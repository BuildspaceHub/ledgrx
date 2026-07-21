import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { cn } from "../utils/utils";

export default function BackButton({ className = "" }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={className}>
      <BsArrowLeft size={20} />
    </button>
  );
}
