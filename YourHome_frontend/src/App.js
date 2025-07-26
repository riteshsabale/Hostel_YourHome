import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthPage } from "./pages/authPage";
import { HomePage } from "./pages/homePage";
import { AboutUsPage } from "./pages/aboutUsPage";
import { ContactPage } from "./pages/contactPage";
import RegisterPage from "./pages/registerPage";
import ResetPage from "./pages/resetPage";
import { AdminHomePage } from "./pages/adminHomePage";
import { HostelOwnerHome } from "./pages/hostelOwnerHome";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/hostelOwnerHome" element={<HostelOwnerHome />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
