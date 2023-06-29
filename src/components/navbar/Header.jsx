import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";



function Header() {
  const [userName, setUserName] = useState('')
  const history = useNavigate();
  const handleLogout = () => {
    history('/')
    localStorage.removeItem('auth')
}
 useEffect(() => {
  const name= localStorage.getItem('auth');
  setUserName(name)
 }, [])
 
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
      {
         userName  == undefined
          ?
         <div className="button">
          <button className="signup">
            <Link to={"/signup"}>Бүртгүүлэх</Link>
          </button>
          <button className="signup">
            <Link to={"/signin"}>Нэвтрэх</Link>
          </button>
          <FaBars className="bars" />
        </div>
        : 
        <button className="bg-slate-600" style={{
            padding: '10px 20px',
            borderRadius: '10px'
        }}>
        <span className="text-white p[30]" onClick={handleLogout}>Гарах</span>
      </button>
      }
        
      </div>
    </React.Fragment>
  );
}

export default Header;
