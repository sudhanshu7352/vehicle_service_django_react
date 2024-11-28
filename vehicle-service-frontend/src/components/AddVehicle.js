import React, { useState } from 'react';

const AddVehicle = () => {
  const [vehicleId, setVehicleId] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const vehicleData = { vehicle_id: vehicleId, model, year, owner };

    fetch('http://localhost:8000/api/vehicles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicleData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Vehicle added:', data);
        alert("Your vehicle is added, thanks!")
        setVehicleId('');
        setModel('');
        setYear('');
        setOwner('');
      })
      .catch(error => {
        console.error('Error adding vehicle:', error);
        alert("Error adding vehicle")
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{"border":"2px solid grey","padding":"2%"}}>
      <h2>Add Vehicle</h2>
      <div>
        <label>Vehicle ID:</label>
        <input 
          type="text" 
          value={vehicleId} 
          onChange={(e) => setVehicleId(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Model:</label>
        <input 
          type="text" 
          value={model} 
          onChange={(e) => setModel(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Year:</label>
        <input 
          type="number" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Owner:</label>
        <input 
          type="text" 
          value={owner} 
          onChange={(e) => setOwner(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default AddVehicle;
