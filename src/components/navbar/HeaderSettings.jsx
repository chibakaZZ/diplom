import React from "react";
import "./HeaderSettings.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiUserCircle, BiCartAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

function HeaderSettings() {
  return (
    <React.Fragment>
      <div className="header">
        <a className="logo" href="/">
          Navbar
        </a>

        <div className="menu">
          <NavLink to={"/"}>Нүүр хуудас</NavLink>
          <NavLink to={"/products"}>Бүтээгдэхүүн</NavLink>
          <NavLink to={"/contact"}>Холбоо барих</NavLink>
          <NavLink to={"/about"}>Үйлчилгээний тухай</NavLink>
        </div>

        <div className="icons">
          <FiSettings className="settingsiconbar" />
          <div className="borderright"></div>
          <BiCartAlt className="carticon" />
          <div className="borderright"></div>
          <BiUserCircle className="user" />
          <FaBars className="bars" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderSettings;
