import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <BsArrowLeft />
    </button>
  );
}
