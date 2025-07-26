import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHostels } from "../reduxSlices/hostelSlice";
import HostelCard from "../cards/hostelCard";
import Header from "../Elements/header";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentForm from "../cards/PaymentForm"; 

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // State for payment form modal
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState(null);


  const { hostelData, loading, error } = useSelector((state) => state.Hostel);

  useEffect(() => {
    dispatch(fetchHostels("/hostel"));
  }, [dispatch]);

  const handleclickOfCard = (item) => {
    console.log("Card clicked!", item);
    setSelectedHostel(item);
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (paymentData) => {
    console.log("Payment submitted:", paymentData);
    toast.success("Your Hostel booking is Confirmed!");
    setShowPaymentForm(false);
    setSelectedHostel(null);
    
  };
  const handlePaymentClose = () => {
    setShowPaymentForm(false);
    setSelectedHostel(null);
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {hostelData?.map((hostel) => (
          <HostelCard
            key={hostel.id}
            hostel={hostel}
            handleclickOfCard={() => handleclickOfCard(hostel)}
          />
        ))}
      </div>

      {showPaymentForm && selectedHostel && (
        <PaymentForm
          hostel={selectedHostel}
          onSubmit={handlePaymentSubmit}
          onClose={handlePaymentClose}
        />
      )}
    </div>
  );
};
