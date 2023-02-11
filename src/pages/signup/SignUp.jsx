import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Header from "../../components/navbar/Header";

function SignUp() {
  return (
    <React.Fragment>
      <Header />
      <div className="container2">
        <div className="container">
          <div className="signups">Бүртгүүлэх</div>
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
            <div className="infos">
              <div className="infotxt">Нууц үг дахин оруулна уу</div>
              <div>
                <input type="text" className="input" />
              </div>
            </div>
          </div>
          <div>
            <button className="signupbtn">
              <Link className="signinlink" to={"/signin"}>
                Бүртгүүлэх
              </Link>
            </button>
          </div>
          <div>
            <button className="signinbtn">
              <Link className="signinlink" to={"/signin"}>
                Нэвтрэх
              </Link>
            </button>
          </div>
          <p className="forget">Нууц үг сэргээх</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
