import Sidebar from "../sidebar/sidebar";
import RequestTable from "../tables/request-table";


const HospitalDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content">
      <h1>Hospital Dashboard</h1>
      <br/>
      <RequestTable />
      </div>
    </div>
  );
};

export default HospitalDashboard;
