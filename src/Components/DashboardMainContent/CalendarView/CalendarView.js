import React from 'react';
import './CalendarView.css';
import { calendarData, octoberDays } from '../../../Data/calenderData'; 

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>{calendarData.month}</h3> {/* Use calendarData for the month */}
      <div className="calendar-grid">
        {octoberDays.map(({ day, appointments }) => ( // Use octoberDays for the calendar grid
          <div key={day} className="calendar-day">
            <span className="day-number">{day}</span>
            <div className="appointments-indicators">
              {appointments.map((time, i) => (
                <span key={i} className="appointment-indicator"></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {calendarData.detailedAppointments && ( // Conditionally render if detailedAppointments exists
        <div className="upcoming-schedule">
          <h4>Upcoming Schedule</h4>
          {calendarData.detailedAppointments.map(({ id, title, time, day }) => ( // use detailedAppointments
            <div key={id} className="appointment-item">
              <span>{title}</span>
              <span>{time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CalendarView;