import { GoBell } from "react-icons/go";

export default function Header() {
  return (
    <header className="w-full h-auto sticky top-0 z-1000 p-4 bg-[var(--bg)]">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="font-medium text-[14px] text-[var(--text)]">Hi, Hakeem</h2>
        </div>
        <div className="bg-brand/10 rounded-full p-1.5">
          <GoBell size={18} />
        </div>
      </div>
    </header>
  );
}
