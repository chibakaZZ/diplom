import React from "react";
import Header from "../../components/navbar/HeaderSettings";
import "./User.css";

function User() {
  return (
    <React.Fragment>
      <Header />
      <div className="usercont">
        <div className="user1">
          <div className="userimg"></div>
        </div>
        <div className="userinfo">
          <div className="inforow">
            <div className="infotext">Бонус оноо </div>
            <div className="infotext">Худалдан авалтын түүх</div>
            <div className="infotext">Гарах</div>
          </div>
          <div className="inforow1"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default User;
