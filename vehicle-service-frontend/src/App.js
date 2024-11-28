import React from 'react';
// import RevenueGraph from './components/RevenueGraph';
// import PaymentForm from './components/PaymentForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard';

const App = () => {
    return (
      <Router>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/register-component" element={<ComponentForm />} />
        <Route path="/add-vehicle" element={<VehicleForm />} />
        <Route path="/add-issue" element={<IssueForm />} />
        <Route path="/revenue" element={<RevenueChart />} /> */}
      </Routes>
    </Router>
    );
};

export default App;
