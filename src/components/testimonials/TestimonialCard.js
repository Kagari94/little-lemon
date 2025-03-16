import React from 'react';
import './style.css';

const TestimonialCard = ({ image, starCount, review, name }) => {
  // Function to render stars based on count
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < count) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-image-container">
        <img 
          src={image} 
          alt={`${name}'s profile`} 
          className="testimonial-image" 
        />
      </div>
      
      <h3 className="testimonial-name">{name}</h3>
      
      <div className="testimonial-stars">
        {renderStars(starCount)}
      </div>
      
      <p className="testimonial-review">
        "{review}"
      </p>
    </div>
  );
};

export default TestimonialCard;