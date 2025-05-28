import React from 'react';
import './AnatomySection.css';
import anatomyImage from '../../../Assets/anotomyImage.jpg';



function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-wrapper">
            <img src={anatomyImage} alt="Anatomy" className="anatomy-image" /> 
    
        <div className="indicator heart">Healthy Heart</div>
        <div className="indicator lungs">Lungs</div>
        <div className="indicator teeth">Teeth</div>
        <div className="indicator bone">Bone</div>
        <div className="indicator leg">Healthy Leg</div>
      </div>
    </div>
  );
}

export default AnatomySection;