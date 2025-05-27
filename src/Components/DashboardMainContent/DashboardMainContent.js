import AnatomySection from "./AnatomySection/AnatomySection";
import CalendarView from "./CalendarView/CalendarView";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";
import "./DashboardMainContent.css";

function DashboardMainContent() {
  return (
    <div className="dashboard-main-content">
  <DashboardOverview />

  <div className="main-row"> 
    <div className="left-section">
      <div className="anatomy-health-row">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>

    <div className="right-section">
      <CalendarView />
    </div>
  </div>
</div>
  );
}

export default DashboardMainContent;