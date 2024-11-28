import React from 'react';
import RevenueGraph from './components/RevenueGraph';
import PaymentForm from './components/PaymentForm';

const App = () => {
    return (
        <div>
            <h1>Vehicle Service System</h1>
            <RevenueGraph />
            <PaymentForm />
        </div>
    );
};

export default App;
