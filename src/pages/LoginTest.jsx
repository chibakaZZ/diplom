import React, { useState } from "react";
import axios from "axios";

function LoginTest() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:3005/user", {
      username,
      password,
    });

    console.log(res);
  };

  return (
    <div>
      <div>
        <label>Username :</label>
        <input type="text" />
        <label>Password :</label>
        <input type="text" />
        <button onClick={handleLogin}>login</button>
        <h2>Status:</h2>
      </div>
    </div>
  );
}

export default LoginTest;
