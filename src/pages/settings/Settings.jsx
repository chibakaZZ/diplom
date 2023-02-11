import React from "react";
import "./Settings.css";
import { FiSettings } from "react-icons/fi";
import HeaderSettings from "../../components/navbar/HeaderSettings";

function Settings() {
  return (
    <React.Fragment>
      <HeaderSettings />
      <div className="settingscont">
        <div className="settings">
          <div className="settext">
            <FiSettings className="settingsicon" />
            Тохиргоо
          </div>
          <div className="settext1">Нууц үг солих</div>
          <div className="settext1">Захиалгын түүх харах</div>
          <div className="settext1">Бонус оноо шалгах</div>
          <div className="settext1">Хямдралтай бараа харах</div>
          <div className="settext1">Гарах</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Settings;
