import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHostels } from "../reduxSlices/hostelSlice";
import HostelCard from "../cards/hostelCard";
import OwnerHostelCard from "../cards/OwnerHostelCard";
import Header from "../Elements/header";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/hostelowner.css";

export const HostelOwnerHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { hostelData, loading, error } = useSelector((state) => state.Hostel);

  // State management
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingHostelId, setEditingHostelId] = useState(null);
  const [hostelForm, setHostelForm] = useState({
    name: "",
    location: "",
    imageurl: "",
    capacity: "",
    rent: "",
    deposit: "",
  });
  const [bookingCounts, setBookingCounts] = useState({});

  const currentOwnerId = 1; // This should come from authentication/user context

  useEffect(() => {
    dispatch(fetchHostels("/hostel"));
    fetchBookingCounts();
  }, [dispatch]);

  // Filter hostels by current owner
  const ownerHostels = hostelData?.filter(
    (hostel) => hostel.owner?.id === currentOwnerId
  ) || [];

  // Fetch booking counts for all hostels
  const fetchBookingCounts = async () => {
    try {
      const counts = {};
      for (const hostel of hostelData || []) {
        const response = await fetch(`http://localhost:8000/bookings/hostel/${hostel.id}/count`);
        if (response.ok) {
          const count = await response.json();
          counts[hostel.id] = count;
        } else {
          counts[hostel.id] = 0;
        }
      }
      setBookingCounts(counts);
    } catch (error) {
      console.error("Error fetching booking counts:", error);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHostelForm({
      ...hostelForm,
      [name]: value,
    });
  };

  // Handle form submission (Add or Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ownerData = {
      id: 1,
      name: "Owner1",
      contactInfo: "9090909090",
      username: "ow1",
      password: "ow1",
    };

    const hostelData = {
      ...hostelForm,
      owner: ownerData,
    };

    try {
      let response;
      if (editMode) {
        // Update existing hostel
        response = await fetch(`http://localhost:8000/hostel/${editingHostelId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hostelData),
        });
        toast.success("Hostel updated successfully!");
      } else {
        // Add new hostel
        response = await fetch("http://localhost:8000/hostel", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hostelData),
        });
        toast.success("Hostel added successfully!");
      }

      if (!response.ok) {
        throw new Error(`Error ${editMode ? 'updating' : 'adding'} hostel`);
      }

      setShowModal(false);
      setEditMode(false);
      setEditingHostelId(null);
      resetForm();
      dispatch(fetchHostels("/hostel"));
      fetchBookingCounts();
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  // Handle edit button click
  const handleEditClick = (hostel) => {
    setEditMode(true);
    setEditingHostelId(hostel.id);
    setHostelForm({
      name: hostel.name,
      location: hostel.location,
      imageurl: hostel.imageurl,
      capacity: hostel.capacity.toString(),
      rent: hostel.rent.toString(),
      deposit: hostel.deposit.toString(),
    });
    setShowModal(true);
  };

  // Handle delete button click
  const handleDeleteClick = async (hostelId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this hostel?");
    
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8000/hostel/${hostelId}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Error deleting hostel");
        }

        toast.success("Hostel deleted successfully!");
        dispatch(fetchHostels("/hostel"));
        fetchBookingCounts();
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  // Reset form
  const resetForm = () => {
    setHostelForm({
      name: "",
      location: "",
      imageurl: "",
      capacity: "",
      rent: "",
      deposit: "",
    });
  };

  // Handle modal close
  const handleModalClose = () => {
    setShowModal(false);
    setEditMode(false);
    setEditingHostelId(null);
    resetForm();
  };

  return (
    <div className="hostel-owner-page">
      <Header />
      <ToastContainer />
      
      <div className="hostel-owner-container">
        <div className="hostel-owner-header">
          <h2 className="hostel-owner-title">My Hostels ({ownerHostels.length})</h2>
          <button
            onClick={() => setShowModal(true)}
            className="add-hostel-btn"
          >
            Add New Hostel
          </button>
        </div>

        {loading && <p className="loading-text">Loading...</p>}
        {error && <p className="error-text">Error: {error}</p>}
        
        {ownerHostels.length === 0 && !loading && (
          <div className="empty-state">
            <p>You haven't added any hostels yet.</p>
            <button onClick={() => setShowModal(true)} className="add-first-hostel-btn">
              Add Your First Hostel
            </button>
          </div>
        )}

        {/* Display owner's hostels */}
        <div className="hostels-grid">
          {ownerHostels.map((hostel) => (
            <OwnerHostelCard 
              key={hostel.id} 
              hostel={hostel} 
              bookingCount={bookingCounts[hostel.id] || 0}
              onEdit={() => handleEditClick(hostel)}
              onDelete={() => handleDeleteClick(hostel.id)}
            />
          ))}
        </div>
      </div>

      {/* Modal for adding/editing hostel */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">{editMode ? "Edit Hostel" : "Add New Hostel"}</h2>
            <form onSubmit={handleSubmit} className="hostel-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={hostelForm.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={hostelForm.location}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  name="imageurl"
                  value={hostelForm.imageurl}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  value={hostelForm.capacity}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Rent (₹)</label>
                <input
                  type="number"
                  name="rent"
                  value={hostelForm.rent}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Deposit (₹)</label>
                <input
                  type="number"
                  name="deposit"
                  value={hostelForm.deposit}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="form-submit-btn">
                  {editMode ? "Update Hostel" : "Add Hostel"}
                </button>
                <button type="button" onClick={handleModalClose} className="form-cancel-btn">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
