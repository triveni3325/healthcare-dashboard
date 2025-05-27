import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardMainContent from './Components/DashboardMainContent/DashboardMainContent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
