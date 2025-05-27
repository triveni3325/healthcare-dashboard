import React from "react";
import './Header.css';
import { MdNotifications } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      {/* Left side */}
      <div className="header-left">
        <h1 className="title">Healthcare</h1>
      </div>

      {/* Center (Search) */}
      <div className="header-center">
        <input
          type="text"
          placeholder="Search"
          className="header-search"
        />
      </div>

      {/* Right side */}
      <div className="header-right">
        {/* Notification Icon */}
        <div className="header-icon">
          <MdNotifications className="notify" />
        </div>

        {/* User Profile */}
        <div className="header-profile">
          <img src="/image.png" alt="user" className="header-user-image" />
          <span className="header-username">Sam</span>
        </div>

        {/* Add Button */}
        <button className="header-add-button">
          <FaPlus />
        </button>
      </div>
    </header>
  );
}

export default Header;
