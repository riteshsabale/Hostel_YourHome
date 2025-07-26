import React from "react";

const OwnerHostelCard = ({ hostel, bookingCount, onEdit, onDelete }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      width: "300px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      backgroundColor: "white"
    }}>
      <img 
        src={hostel.imageurl || "/default-hostel.jpg"} 
        alt={hostel.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "6px",
          marginBottom: "10px"
        }}
        onError={(e) => {
          e.target.src = "/default-hostel.jpg";
        }}
      />
      
      <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>{hostel.name}</h3>
      
      <div style={{ marginBottom: "15px", fontSize: "14px", color: "#666" }}>
        <p style={{ margin: "5px 0" }}><strong>Location:</strong> {hostel.location}</p>
        <p style={{ margin: "5px 0" }}><strong>Capacity:</strong> {hostel.capacity} people</p>
        <p style={{ margin: "5px 0" }}><strong>Rent:</strong> ₹{hostel.rent}/month</p>
        <p style={{ margin: "5px 0" }}><strong>Deposit:</strong> ₹{hostel.deposit}</p>
        <p style={{ margin: "5px 0", color: "#4CAF50" }}>
          <strong>Bookings:</strong> {bookingCount} / {hostel.capacity}
        </p>
        <div style={{
          backgroundColor: bookingCount >= hostel.capacity ? "#ffebee" : "#e8f5e8",
          color: bookingCount >= hostel.capacity ? "#c62828" : "#2e7d32",
          padding: "5px 10px",
          borderRadius: "15px",
          fontSize: "12px",
          textAlign: "center",
          marginTop: "8px"
        }}>
          {bookingCount >= hostel.capacity ? "Fully Booked" : "Available"}
        </div>
      </div>
      
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={onEdit}
          style={{
            flex: 1,
            padding: "8px 12px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          style={{
            flex: 1,
            padding: "8px 12px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OwnerHostelCard;
