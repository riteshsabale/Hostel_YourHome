import React, { useState } from "react";
import LoginForm from "../molecules/LoginForm";

const HostelOwnerLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Hostel Owner Login - Name: ", name);
    console.log("Hostel Owner Login - Password: ", password);
  };

  return (
    <div className="login-container">
      <h2>Hostel Owner Login</h2>
      <div className="login-form">
        <InputField
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <Button text={buttonText} onClick={handleLogin} className="login-btn" />
      </div>
    </div>
  );
};

export default HostelOwnerLogin;
