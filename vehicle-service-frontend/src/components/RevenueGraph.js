import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RevenueGraph= () => {
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/revenue/')
      .then(response => response.json())
      .then(data => setRevenueData(data));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={revenueData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueGraph;
