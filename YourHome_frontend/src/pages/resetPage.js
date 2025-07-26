import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // For toast styling

const ResetPage = () => {
  const [email, setEmail] = useState(""); // State to store the email input

  const handleChange = (e) => {
    setEmail(e.target.value); // Update email on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for password reset (e.g., sending an email with a reset link)
    // For now, we show a success message
    toast.success("Password reset link sent to your email!");

    // Reset the email field
    setEmail("");
  };

  const resetPageStyles = {
    height: "100vh",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Roboto', sans-serif",
  };

  const formContainerStyles = {
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "40px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const inputFieldStyles = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "#333",
  };

  const submitButtonStyles = {
    padding: "12px 30px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const submitButtonHoverStyles = {
    backgroundColor: "#0056b3",
  };

  const sectionTitleStyles = {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5rem",
    color: "#333",
  };

  return (
    <>
      <ToastContainer />
      <div style={resetPageStyles}>
        <h1 style={sectionTitleStyles}>Reset Your Password</h1>
        <div style={formContainerStyles}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />
            <button
              type="submit"
              style={submitButtonStyles}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPage;
