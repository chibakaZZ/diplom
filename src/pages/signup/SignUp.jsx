import "./SignUp.css";
import Header from "../../components/navbar/Header";
import React, { useState } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function SignUp() {
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState('')
  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((response)=>{
        console.log('response---->', response)
        alert('Google-r amjilttai bvrtgelee');
    })
    .catch((error) => {
        console.log('error --<', error)
    })
}

const signUp = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('ususuusu', userCredential);
      setStatus("success");
      history("/signin");
    })
    .catch((error) => {
      console.log(error);
      setStatus("Failed");
      console.warn(error)
    });
};

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
              <input type="text" onChange={handleUsername} style={{borderRadius:'5px', border:'none'}}/>
            </div>
            <div className="infos">
              <div className="infotxt">Цахим шуудан</div>
              <input type="text" onChange={handleEmail} style={{borderRadius:'5px', border:'none'}}/>
            </div>
            <div className="infos">
              <div className="infotxt">Нууц үг</div>
              <input type="password"  onChange={handlePassword}  style={{borderRadius:'5px', border:'none'}}/>
            </div>
            <div className="infos">
              <div className="infotxt">Нууц үг дахин оруулна уу</div>
              <input type="password" onChange={handleConfirmPassword} style={{borderRadius:'5px', border:'none'}} />
            </div>
          </div>
          <div>
            <button onClick={signUp} className="signUpnbtn">Sign up</button>
            <button onClick={signWithGoogle} className="signUpnbtn" style={{
                marginLeft: '10px'

            }}>
                  Google
              </button>

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
