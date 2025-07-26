import React, { useState } from "react";
import LoginForm from "./LoginForm";

const StudentLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    
    console.log("Student Login - Name: ", name);
    console.log("Student Login - Password: ", password);
    
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
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

export default StudentLogin;
