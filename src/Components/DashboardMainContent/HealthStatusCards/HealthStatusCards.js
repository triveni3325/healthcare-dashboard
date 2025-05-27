import React from 'react';
import './HealthStatusCards.css';
import { healthStatusCards } from '../../../Data/healthStatusData'; // Correct import

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
    
      <div className="cards-container">
        {healthStatusCards.map((item) => (
          <div
            key={item.title}
            className={`status-card ${item.status.toLowerCase().replace(/\s/g, '-')}`}
          >
            <h4>{item.title}</h4>
            <p className="date">{item.date}</p>
            <span className="status-indicator">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthStatusCards;