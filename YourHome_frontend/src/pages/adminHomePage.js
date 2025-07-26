import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHostels } from "../reduxSlices/hostelSlice"; // Import the thunk
import Header from "../Elements/header"; // Assuming Header is a presentational component
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Importing toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import DeleteHostelCard from "../cards/deleteHostelCard";
// HostelCard component for displaying individual hostel details

export const AdminHomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to track individual hostel details if needed
  const [hostelDetails, setHostelDetails] = useState(null);

  // Select hostel data from Redux store
  const { hostelData, loading, error } = useSelector((state) => state.Hostel);

  useEffect(() => {
    dispatch(fetchHostels("/hostel")); // Fetch all hostels from API initially
  }, [dispatch]);

  // Fetch individual hostel details when delete button is clicked
  const handleDeleteClick = async (id) => {
    try {
      // Fetch the hostel details by ID from the API
      const response = await fetch(`http://localhost:8000/hostel/${id}`);
      if (!response.ok) {
        throw new Error("Error fetching hostel details");
      }
      const data = await response.json();
      setHostelDetails(data); // Set the fetched hostel details to the state

      // Show confirmation before deleting
      const confirmDelete = window.confirm("Are you sure you want to delete this hostel?");
      
      if (confirmDelete) {
        // If confirmed, delete the hostel
        const deleteResponse = await fetch(`http://localhost:8000/hostel/${id}`, {
          method: "DELETE",
        });

        if (!deleteResponse.ok) {
          throw new Error("Error deleting hostel");
        }

        // After successful deletion, remove the hostel from the list (if you have it in state)
        toast.success("Hostel deleted successfully!");

        // Optionally, you can trigger a re-fetch of the hostel list
        dispatch(fetchHostels("/hostel"));
      } else {
        toast.info("Hostel deletion canceled.");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer /> {/* Toast notification container */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {/* If no hostels available */}
      {hostelData?.length === 0 && !loading && <p>No hostels available.</p>}
      {/* Display hostels */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {hostelData?.map((hostel) => (
          <DeleteHostelCard
            key={hostel.id}
            hostel={hostel}
            handleclickOfCard={() => {}} // Card click handler
            handleDeleteClick={() => handleDeleteClick(hostel.id)} // Pass the delete ID
          />
        ))}
      </div>
      {/* Optionally display fetched hostel details */}
      {hostelDetails && (
        <div>
          <h2>Hostel Details</h2>
          <pre>{JSON.stringify(hostelDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};