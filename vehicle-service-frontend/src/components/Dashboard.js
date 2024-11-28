import React from 'react';
import ComponentForm from './ComponentForm';
import AddVehicle from './AddVehicle';
import AddIssues from './AddIssues';
import RevenueGraph from './RevenueGraph';

const Dashboard = () => {
  return (
    <div>
      <h1>Vehicle Service Dashboard</h1>
      <RevenueGraph />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ComponentForm />
        <AddVehicle />
        <AddIssues />
      </div>
    </div>
  );
};

export default Dashboard;
