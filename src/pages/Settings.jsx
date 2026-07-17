import BackButton from "../components/BackButton";
import SettingsClick from "../components/SettingClick";

export default function Settings() {
  return (
    <div className="bg-(--bg) w-full flex flex-col p-2">
      <SettingsClick />
    </div>
  );
}
