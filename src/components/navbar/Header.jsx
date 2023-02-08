import React from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Header() {
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

        <div className="button">
          <button className="signup">
            <Link to={"/signup"}>Бүртгүүлэх</Link>
          </button>
          <button className="signup">
            <Link to={"/signin"}>Нэвтрэх</Link>
          </button>
          <FaBars className="bars" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
