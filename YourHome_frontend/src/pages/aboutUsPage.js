import React from "react";
import Header from "../Elements/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/aboutuspage.css";

export const AboutUsPage = () => {
  const aboutUsStyles = {
    height: "100vh",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Roboto', sans-serif",
  };

  const sectionTitleStyles = {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
    animation: "fadeIn 1s ease-out",
  };

  const sectionTextStyles = {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.7",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    animation: "fadeIn 1.5s ease-out",
  };

  const teamContainerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: "40px",
    animation: "fadeIn 2s ease-out",
  };

  const teamMemberStyles = {
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const teamMemberImageStyles = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  };

  const teamMemberNameStyles = {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#333",
  };

  const teamMemberRoleStyles = {
    fontSize: "1rem",
    color: "#777",
  };

  return (
    <>
      <ToastContainer />
      <Header />

      <div style={aboutUsStyles}>
        <h1 style={sectionTitleStyles}>About Us</h1>

        <p style={sectionTextStyles}>
  Your Home is built by a group of passionate students who want to make
  finding great, affordable accommodation as simple as possible. Our
  platform connects travellers and students to trusted hostels across
  the country, giving you transparent prices and a hassle-free booking
  experience.
</p>


        <p style={sectionTextStyles}>
          We believe everyone deserves a safe, comfortable place to stay while
          pursuing their dreams away from home. That’s why we focus on reliable
          listings, honest reviews and responsive support.
        </p>

        <h2 style={sectionTitleStyles}>Meet Our Team</h2>

        <div style={teamContainerStyles}>
          
          <div style={teamMemberStyles} className="team-member">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="Abhijeet Raskar"
              style={teamMemberImageStyles}
            />
            <h3 style={teamMemberNameStyles}>Abhijeet Raskar</h3>
            <p style={teamMemberRoleStyles}>Student</p>
          </div>

          
          <div style={teamMemberStyles} className="team-member">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="Ritesh Sabale"
              style={teamMemberImageStyles}
            />
            <h3 style={teamMemberNameStyles}>Ritesh Sabale</h3>
            <p style={teamMemberRoleStyles}>Student</p>
          </div>

          
          <div style={teamMemberStyles} className="team-member">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="Yash Padwal"
              style={teamMemberImageStyles}
            />
            <h3 style={teamMemberNameStyles}>Yash Padwal</h3>
            <p style={teamMemberRoleStyles}>Student</p>
          </div>
        </div>
      </div>
    </>
  );
};
