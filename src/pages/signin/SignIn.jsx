import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import Header from "../../components/navbar/Header";

function SignIn() {
  return (
    <React.Fragment>
      <Header />
      <div className="container1">
        <div className="container">
          <div className="signups">Нэвтрэх</div>
          <div className="info">
            <div className="infos">
              <div className="infotxt">Нэвтрэх нэр</div>
              <div>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="infos">
              <div className="infotxt">Нууц үг</div>
              <div>
                <input type="text" className="input" />
              </div>
            </div>
          </div>
          <div>
            <button className="signupbtn">
              <Link className="signinlink" to={"/products"}>
                Нэвтрэх
              </Link>
            </button>
          </div>
          <div>
            <button className="signinbtn">
              <Link className="signinlink" to={"/signup"}>
                Бүртгүүлэх
              </Link>
            </button>
          </div>
          <p className="forget">Нууц үг сэргээх</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
