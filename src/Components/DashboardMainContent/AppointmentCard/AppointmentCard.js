import React from 'react';
import './styles/SimpleAppointmentCard.css';

import { FaCheck as CheckIcon } from "react-icons/fa";
import { FaEye as EyeIcon } from "react-icons/fa";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { ReactComponent as BrainIcon } from '../assets/icons/brain.svg';

const iconMap = {
  check: CheckIcon,
  eye: EyeIcon,
  heart: HeartIcon,
  brain: BrainIcon,
};

function SimpleAppointmentCard({ title, time, icon }) {
  const IconComponent = iconMap[icon];

  return (
    <div className="simple-appointment-card">
      {IconComponent && <IconComponent className="card-icon" />}
      <div className="card-details">
        <h4 className="card-title">{title}</h4>
        <p className="card-time">{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;