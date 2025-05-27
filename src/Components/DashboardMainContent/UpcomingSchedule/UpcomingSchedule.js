import React from 'react';
import './styles/UpcomingSchedule.css';
import { upcomingAppointments } from '../data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((daySchedule) => (
        <div key={daySchedule.day} className="day-schedule">
          <h4>On {daySchedule.day}</h4>
          <div className="appointments-list">
            {daySchedule.appointments.map((appt) => (
              <SimpleAppointmentCard key={appt.title} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;