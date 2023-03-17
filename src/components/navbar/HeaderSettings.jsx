import React from "react";
import "./HeaderSettings.css";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
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
          <Link to={"/settings"}>
            <FiSettings className="settingsiconbar" />
          </Link>
          <div className="borderright"></div>
          <Link to={"/cart"}>
            <BiCartAlt className="carticon" />
          </Link>
          <div className="borderright"></div>
          <Link to={"/user"}>
            <BiUserCircle className="user" />
          </Link>
          <FaBars className="bars" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderSettings;
