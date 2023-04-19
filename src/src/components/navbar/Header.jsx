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
          <Link to={"/signup"}>
            <button className="signup">Бүртгүүлэх</button>
          </Link>
          <Link to={"/signin"}>
            <button className="signup">Нэвтрэх</button>
          </Link>
          <FaBars className="bars" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
