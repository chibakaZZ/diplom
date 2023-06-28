import "./SignUp.css";
import Header from "../../components/navbar/Header";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authentication } from "../../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";


function SignUp() {
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState(false);

  const signWithGoogle = () => {
    signInWithPopup(authentication, provider)
    .then((response)=>{
        console.log('response---->', response)
        alert('Google-r amjilttai bvrtgelee');
    })
    .catch((error) => {
        console.log('error --<', error)
    })
}

  const history = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async () => {
    const res = await axios.post("http://localhost:3005/signup", {
      username,
      password,
    });

    const data = await res.data;

    if (data.type == "success") {
      setStatus("success");
      history("/signin");
    } else {
      setStatus("Failed");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container2">
        <div className="container">
          <div className="signups">Бүртгүүлэх</div>
          <div className="info">
            <div className="infos">
              <div className="infotxt">Нэвтрэх нэр</div>
              <input type="text" onChange={handleUsername} />
            </div>
            <div className="infos">
              <div className="infotxt">Цахим шуудан</div>
              <input type="text" onChange={handleEmail} />
            </div>
            <div className="infos">
              <div className="infotxt">Нууц үг</div>
              <input type="text" onChange={handlePassword} />
            </div>
            <div className="infos">
              <div className="infotxt">Нууц үг дахин оруулна уу</div>
              <input type="text" onChange={handleConfirmPassword} />
            </div>
          </div>
          <div>
            <button onClick={handleSignUp}>Sign up</button>
          </div>
          {/* <div>
            <button className="signinbtn">
              <Link className="signinlink" to={"/signin"}>
                Нэвтрэх
              </Link>
            </button>
          </div> */}
          <p className="forget">Нууц үг сэргээх</p>
          <h2>Status: {!status ? "Failed" : "Success"}</h2>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
