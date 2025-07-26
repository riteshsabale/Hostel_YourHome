import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import dispatch and useSelector
import { loginUser } from "../reduxSlices/authSlice"; // Import login action
import { useNavigate } from "react-router-dom"; // For page redirection
import "../styles/auth.css";

export const AuthPage = () => {
  const [selectedLoginType, setSelectedLoginType] = useState("student");
  const [username, setUsername] = useState(""); // Renaming name to username
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // To dispatch actions
  const navigate = useNavigate(); // Hook for navigation

  const { loading, error, user } = useSelector((state) => state.auth); // Get state from Redux

  // Handle login click
  const handleLoginClick = async () => {
    console.log("Logging in as:", selectedLoginType);
    console.log("Username:", username);
    console.log("Password:", password);
  
    try {
      // Dispatch login action and get the user response
      const response = await dispatch(
        loginUser({ username, password, userType: selectedLoginType })
      ).unwrap();
  
      console.log("Login Response:", response);
  
      // Check if user is successfully logged in and navigate
      if (response) {
        if (selectedLoginType === "admin") {
          navigate("/adminhome");
        } else if (selectedLoginType === "student") {
          navigate("/home");
        } else if (selectedLoginType === "hostelOwner") {
          navigate("/hostelOwnerHome");
        }
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  

  // Handle Sign Up button click (Redirect to Sign Up page)
  const handleSignUpClick = () => {
    console.log("Signing up as:", selectedLoginType);
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/signup");
  };

  return (
    <div className="main-login">
      <h1>Your Home</h1>

      {/* Radio buttons to select login type */}
      <div className="login-type-selection">
        <label>
          <input
            type="radio"
            name="loginType"
            value="student"
            checked={selectedLoginType === "student"}
            onChange={(e) => setSelectedLoginType(e.target.value)}
          />
          Student
        </label>
        <label>
          <input
            type="radio"
            name="loginType"
            value="admin"
            checked={selectedLoginType === "admin"}
            onChange={(e) => setSelectedLoginType(e.target.value)}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            name="loginType"
            value="hostelOwner"
            checked={selectedLoginType === "hostelOwner"}
            onChange={(e) => setSelectedLoginType(e.target.value)}
          />
          Hostel Owner
        </label>
      </div>

      {/* Form for Login and Sign Up */}
      <div className="auth-form">
        <h2>
          {selectedLoginType.charAt(0).toUpperCase() +
            selectedLoginType.slice(1)}{" "}
          Login
        </h2>

        {/* Username input */}
        <input
          type="text"
          placeholder="Enter your username" // Make sure this says "username"
          value={username} // Bind to the username state
          onChange={(e) => setUsername(e.target.value)} // Update username on input change
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Buttons to navigate to Login or Sign Up page */}
        <div className="button-container">
          <button
            className="login-btn"
            onClick={handleLoginClick}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
          <button className="signup-btn" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>

        {/* Reset button */}
        <button className="reset-btn" onClick={() => navigate("/reset")}>
          Reset
        </button>

        {/* Error message */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};