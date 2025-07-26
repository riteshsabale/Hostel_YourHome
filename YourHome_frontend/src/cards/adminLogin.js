import React, { useState } from "react";

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Admin Login - Name: ", name);
    console.log("Admin Login - Password: ", password);
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
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

export default AdminLogin;
