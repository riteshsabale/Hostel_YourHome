import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../reduxSlices/signupSlice"; // Student API
import { signupOwner } from "../reduxSlices/ownerSignupSlice"; // Owner API

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    contactInfo: "", // Only required for owners
  });

  const [userType, setUserType] = useState("student"); // Default: Student

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType === "student") {
      dispatch(signupUser(formData))
        .unwrap()
        .then(() => {
          toast.success("Student Registration Successful!");
          setFormData({
            name: "",
            email: "",
            username: "",
            password: "",
          });
          navigate("/");
        })
        .catch((error) => {
          toast.error(error || "Something went wrong");
        });
    } else {
      dispatch(signupOwner(formData))
        .unwrap()
        .then(() => {
          toast.success("Hostel Owner Registration Successful!");
          setFormData({
            name: "",
            username: "",
            password: "",
            contactInfo: "",
          });
          navigate("/");
        })
        .catch((error) => {
          toast.error(error || "Something went wrong");
        });
    }
  };

  return (
    <>
    
      <ToastContainer />
      <div style={styles.registerPage}>
        <div style={styles.formContainer}>
          <h1 style={styles.sectionTitle}>Create Your Account</h1>

          {/* Radio Buttons */}
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === "student"}
                onChange={() => setUserType("student")}
              />{" "}
              Student
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="owner"
                checked={userType === "owner"}
                onChange={() => setUserType("owner")}
              />{" "}
              Hostel Owner
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.inputField}
              required
            />
             {userType !== "owner" && (
              <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.inputField}
              required
            />
            )}
            <input
              type="text"
              name="username"
              placeholder="Your Username"
              value={formData.username}
              onChange={handleChange}
              style={styles.inputField}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.inputField}
              required
            />

            {/* Contact Info (only for hostel owners) */}
            {userType === "owner" && (
              <input
                type="text"
                name="contactInfo"
                placeholder="Contact Info"
                value={formData.contactInfo}
                onChange={handleChange}
                style={styles.inputField}
                required
              />
            )}

            <button
              type="submit"
              style={styles.submitButton}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Register
            </button>
          </form>
        </div>
      </div>
      
    </>
  );
};

// CSS-in-JS Styles
const styles = {
  registerPage: {
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(../Images/hostel.jpeg)", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  formContainer: {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "40px",
    boxShadow: "0 4px 12px rgba(254, 254, 254, 0.1)",
    
  },
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5rem",
    color: "#333",
  },
};

export default RegisterPage;
