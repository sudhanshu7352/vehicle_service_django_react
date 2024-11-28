import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [vehicleId, setVehicleId] = useState('');
    const [amountPaid, setAmountPaid] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const paymentData = {
            vehicle: vehicleId,
            amount_paid: parseFloat(amountPaid),
        };

        axios.post('http://localhost:8000/api/payments/', paymentData)
            .then(response => {
                console.log("Payment Registered:", response.data);
                setVehicleId('');
                setAmountPaid('');
            })
            .catch(error => {
                console.error("There was an error registering the payment!", error);
            });
    };

    return (
        <div>
            <h2>Register Payment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Vehicle ID</label>
                    <input
                        type="text"
                        value={vehicleId}
                        onChange={(e) => setVehicleId(e.target.value)}
                    />
                </div>
                <div>
                    <label>Amount Paid</label>
                    <input
                        type="number"
                        value={amountPaid}
                        onChange={(e) => setAmountPaid(e.target.value)}
                    />
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default PaymentForm;
