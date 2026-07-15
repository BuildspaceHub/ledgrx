import BackButton from "../components/BackButton";
import SettingsClick from "../components/SettingClick";

export default function Settings() {
  return (
    <div className="bg-[var(--bg)] w-full flex flex-col p-2">
      {/* <div className="text-center text-gray-400">
        Settings page is coming soon
      </div> */}
      <SettingsClick />
    </div>
  );
}
