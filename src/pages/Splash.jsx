import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/onboarding");
    }, 4000);
  }, []);

  return (
    <div className="bg-[var(--bg)] min-h-screen flex justify-center items-center flex-col gap-5">
      <h3 className="text-3xl font-poppins text-[var(--text)] font-normal md:text-5xl">
        Ledgr
        <span className="text-[var(--color-brand)] text-4xl animate-pulse md:text-7xl">X</span>
      </h3>
    </div>
  );
}
