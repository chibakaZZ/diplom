import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginTest() {
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

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:3005/login", {
      username,
      password,
    });

    const data = await res.data;

    console.log(data);

    if (data.type == "success") {
      setStatus("success");
      history("/");
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
      <button onClick={handleLogin}>login</button>
      <h2>Status: {!status ? "Failed" : "Success"}</h2>
    </div>
  );
}

export default LoginTest;
