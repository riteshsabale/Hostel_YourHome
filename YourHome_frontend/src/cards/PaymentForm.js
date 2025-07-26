import React, { useState } from "react";
import "../styles/PaymentForm.css"; // CSS file for styling

const PaymentForm = ({ hostel, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
    email: "",
    phone: " ",
    address: ""
  });

  const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.cardNumber || formData.cardNumber.length < 16) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
    }

    if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Please enter expiry date in MM/YY format";
    }

    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = "Please enter a valid CVV";
    }

    if (!formData.cardHolderName.trim()) {
      newErrors.cardHolderName = "Please enter card holder name";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const paymentData = {
        ...formData,
        hostelId: hostel.id,
        amount: hostel.rent,
        hostelName: hostel.name,
        owner: hostel.owner
      };
      
      onSubmit(paymentData);
    }
  };

  // Format card number input
  const formatCardNumber = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };

  // Format expiry date input
  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substr(0, 5);
  };

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <div className="payment-header">
          <h2>Payment Details</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="hostel-info">
          <h3>{hostel?.name || 'N/A'}</h3>
          <p>Owner: {
            hostel?.owner 
              ? (typeof hostel.owner === 'string' 
                  ? hostel.owner 
                  : hostel.owner.name || hostel.owner.username || 'Unknown Owner')
              : 'N/A'
          }</p>
          <p className="amount">Amount: ₹{hostel?.rent || 0}</p>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Card Number *</label>
            <input
              type="text"
              name="cardNumber"
              value={formatCardNumber(formData.cardNumber)}
              onChange={(e) => handleInputChange({
                target: { name: 'cardNumber', value: e.target.value.replace(/\s/g, '') }
              })}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              className={errors.cardNumber ? "error" : ""}
            />
            {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date *</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={(e) => handleInputChange({
                  target: { name: 'expiryDate', value: formatExpiryDate(e.target.value) }
                })}
                placeholder="MM/YY"
                maxLength="5"
                className={errors.expiryDate ? "error" : ""}
              />
              {errors.expiryDate && <span className="error-text">{errors.expiryDate}</span>}
            </div>

            <div className="form-group">
              <label>CVV *</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength="4"
                className={errors.cvv ? "error" : ""}
              />
              {errors.cvv && <span className="error-text">{errors.cvv}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Card Holder Name *</label>
            <input
              type="text"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={errors.cardHolderName ? "error" : ""}
            />
            {errors.cardHolderName && <span className="error-text">{errors.cardHolderName}</span>}
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="1234567890"
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Billing Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your billing address"
              rows="3"
            />
          </div>

          <div className="form-buttons">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Pay ₹{hostel?.rent || 0}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
