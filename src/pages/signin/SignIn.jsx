import "./SignIn.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/navbar/Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("false");

  const history = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleLogin = async () => {
  //   const res = await axios.post("http://localhost:3005/signin", {
  //     username,
  //     password,
  //   });

  //   const data = await res.data;

  //   console.log(data);

  //   if (data.type == "success") {
  //     setStatus("success");
  //     history("/");
  //   } else {
  //     setStatus("Failed");
  //   }
  // };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        console.log(userCredential);
        setStatus("success");
        //     history("/");
        history("/login-home");
      })
      .catch((error) => {
        console.log(error);
        setStatus("Failed");
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
              <div className="infotxt">Цахим шуудан</div>
              <div>
                <input type="text" onChange={handleUsername}  style={{borderRadius:'5px', border:'none'}}/>
              </div>
            </div>
            <div className="infos">
              <div className="infotxt">Нууц үг</div>
              <div>
                <input type="password" onChange={handlePassword} style={{borderRadius:'5px', border:'none'}}/>
              </div>
            </div>
          </div>
          <div>
            <button onClick={signIn} className="signinbtn">
              Нэвтрэх
            </button>
          </div>
          <p className="forget">Нууц үг сэргээх</p>
          <h2>Status: {!status ? "Failed" : "Success"}</h2>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
