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
          <div className="settext1">Профайл зураг солих</div>
          <div className="settext1">Нэр солих</div>
          <div className="settext1">Нууц үг солих</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Settings;
