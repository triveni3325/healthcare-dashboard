import React from "react";
import "./Sidebar.css";
import {
  MdDashboard,
  MdHistory,
  MdCalendarToday,
  MdEventNote,
  MdBarChart,
  MdAssignment,
  MdChat,
  MdSupport,
  MdSettings,
} from "react-icons/md";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">General</h3>
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <MdDashboard className="sidebar-icon" /> Dashboard
          </li>
          <li className="sidebar-item">
            <MdHistory className="sidebar-icon" /> History
          </li>
          <li className="sidebar-item">
            <MdCalendarToday className="sidebar-icon" /> Calendar
          </li>
          <li className="sidebar-item">
            <MdEventNote className="sidebar-icon" /> Appointments
          </li>
          <li className="sidebar-item">
            <MdBarChart className="sidebar-icon" /> Statistics
          </li>
          <li className="sidebar-item">
            <MdAssignment className="sidebar-icon" /> Tests
          </li>
          <li className="sidebar-item">
            <MdChat className="sidebar-icon" /> Chat
          </li>
          <li className="sidebar-item">
            <MdSupport className="sidebar-icon" /> Support
          </li>
          <li className="sidebar-item">
            <MdSettings className="sidebar-icon" /> Setting
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
