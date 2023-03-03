import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/navbar/Header";

function SignIn() {
  const [user, setUser] = useState("");
  const Sign = () => {
    axios
      .post("http://localhost:3003/user", {
        username: user,
      })
      .then(function (response) {
        if (response.data === "OK") {
          console.log("Newterlee...");
        } else {
          console.log("Shalgana uu...");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
                <input
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
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
            <button className="signinbtn" onClick={Sign}>
              Бүртгүүлэх
            </button>
          </div>
          <p className="forget">Нууц үг сэргээх</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
