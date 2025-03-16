import React from 'react';
import './style.css';

function ConfirmationPage({ bookingData, returnToBooking }) {
  if (!bookingData) {
    return (
      <div className="confirmation-error">
        <h2>No booking information found</h2>
        <button onClick={returnToBooking} className="button">
          Return to Booking Form
        </button>
      </div>
    );
  }

  const { date, time, guests, occasion, formattedDate } = bookingData;

  return (
    <div className="confirmation-page">
      
      <div className="confirmation-details">
        <div className="confirmation-header">
          <h2>Thank you for your reservation</h2>
          <p>We look forward to serving you. Here are your booking details:</p>
        </div>
        
        <div className="booking-summary">
          <div className="summary-card">
            <h3>Reservation Details</h3>
            <div className="summary-item">
              <span className="label">Date:</span>
              <span className="value">{formattedDate}</span>
            </div>
            <div className="summary-item">
              <span className="label">Time:</span>
              <span className="value">{time}</span>
            </div>
            <div className="summary-item">
              <span className="label">Party Size:</span>
              <span className="value">{guests} {guests === 1 ? 'person' : 'people'}</span>
            </div>
            <div className="summary-item">
              <span className="label">Occasion:</span>
              <span className="value">{occasion}</span>
            </div>
            
            <div className="confirmation-id">
              <span className="label">Confirmation ID:</span>
              <span className="value">{generateConfirmationId(date, time)}</span>
            </div>
          </div>
        </div>
        
        <div className="restaurant-info">
          <h3>Restaurant Information</h3>
          <p>Little Lemon Restaurant</p>
          <p>123 Main Street</p>
          <p>Chicago, IL 60601</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        
        <div className="additional-info">
          <h3>Important Information</h3>
          <ul>
            <li>Please arrive 10 minutes before your reservation time.</li>
            <li>Your table will be held for 15 minutes after your reservation time.</li>
            <li>For cancellations, please contact us at least 4 hours before your reservation.</li>
          </ul>
        </div>
      </div>
      
      <div className="action-buttons">
        <button onClick={returnToBooking} className="button primary">
          Make Another Reservation
        </button>
      </div>
    </div>
  );
}

function generateConfirmationId(date, time) {
  const dateStr = date.replace(/-/g, '');
  const timeStr = time.replace(':', '');
  const randomPart = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `LLR-${dateStr}-${timeStr}-${randomPart}`;
}

export default ConfirmationPage;