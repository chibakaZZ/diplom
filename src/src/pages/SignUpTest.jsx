import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpTest() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState(false);

  const history = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
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
      history("/logintest");
    } else {
      setStatus("Failed");
    }
  };

  return (
    <div>
      <label>Username :</label>
      <input type="text" onChange={handleUsername} />
      <label>Password :</label>
      <input type="text" onChange={handlePassword} />
      <label>Confirm Password : </label>
      <input type="text" onChange={handleConfirmPassword} />
      <button onClick={handleSignUp}>Sign up</button>
      <h2>Status: {!status ? "Failed" : "Success"}</h2>
    </div>
  );
}

export default SignUpTest;
