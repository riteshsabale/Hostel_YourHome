import React from "react";
import "../styles/hostelCard.css"; 
import image1 from "../Images/h1.jpeg"; 

const DeleteHostelCard = ({ hostel, handleclickOfCard, handleDeleteClick }) => {
  return (
    <div className="hostel-card">
      <div className="hostel-card-img">
        <img
          src={hostel.imageurl || image1}
          alt={hostel.name}
          className="hostel-image"
        />
      </div>
      <div className="hostel-card-info">
        <h3 className="hostel-title">{hostel.name}</h3>
        <p>
          <strong>ID:</strong> {hostel.id}
        </p>
        <p>
          <strong>Location:</strong> {hostel.location}
        </p>
        <p>
          <strong>Capacity:</strong> {hostel.capacity} beds
        </p>
        <p>
          <strong>Rent:</strong> ₹{hostel.rent}
        </p>
        <p>
          <strong>Deposit:</strong> ₹{hostel.deposit}
        </p>
        <p>
          <strong>Owner:</strong> {hostel?.owner?.name || "N/A"}
        </p>
        <p>
          <strong>Owner Contact:</strong> {hostel?.owner?.contactInfo || "N/A"}
        </p>
        
        
        {}
        <button
          className="delete-button"
          onClick={() => handleDeleteClick(hostel.id)} 
        >
          Delete Hostel
        </button>
      </div>
    </div>
  );
};

export default DeleteHostelCard;