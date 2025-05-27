import React from 'react';
import './styles/ActivityFeed.css';
import { activityData } from '../data/activityData';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p className="week-summary">{activityData.weekSummary}</p>
      <div className="bar-chart">
        {activityData.chartData.map((height, index) => (
          <div
            key={index}
            className={`bar height-${height}`}
            title={`Activity: ${height}%`}
          />
        ))}
      </div>
      <div className="days">
        {activityData.days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;