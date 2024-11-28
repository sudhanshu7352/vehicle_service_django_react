import React, { useState, useEffect } from 'react';

const AddIssues = () => {
  const [vehicles, setVehicles] = useState([]);
  const [components, setComponents] = useState([]);
  const [vehicleId, setVehicleId] = useState('');
  const [description, setDescription] = useState('');
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [isRepair, setIsRepair] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/vehicles/')
      .then(response => response.json())
      .then(data => setVehicles(data))
      .catch(error => console.error('Error fetching vehicles:', error));

    fetch('http://localhost:8000/api/components/')
      .then(response => response.json())
      .then(data => setComponents(data))
      .catch(error => console.error('Error fetching components:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const issueData = {
      vehicle: vehicleId,
      description,
      components_needed: selectedComponents,
      is_repair: isRepair,
    };

    fetch('http://localhost:8000/api/issues/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issueData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Issue added:', data);
        alert('Issue added:')
        setVehicleId('');
        setDescription('');
        setSelectedComponents([]);
        setIsRepair(false);
      })
      .catch(error => console.error('Error adding issue:', error));
  };

  return (
    <form onSubmit={handleSubmit} style={{"border":"2px solid grey","padding":"2%"}}>
      <h2>Add Issue</h2>
      <div>
        <label>Vehicle:</label>
        <select 
          value={vehicleId} 
          onChange={(e) => setVehicleId(e.target.value)} 
          required
        >
          <option value="">Select Vehicle</option>
          {vehicles.map(vehicle => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.model} ({vehicle.vehicle_id})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>Components Needed:</label>
        <select 
          multiple 
          value={selectedComponents} 
          onChange={(e) => setSelectedComponents([...e.target.selectedOptions].map(option => option.value))} 
          required
        >
          {components.map(component => (
            <option key={component.id} value={component.id}>
              {component.name} (${component.price})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={isRepair} 
            onChange={(e) => setIsRepair(e.target.checked)} 
          />
          Is Repair
        </label>
      </div>
      <button type="submit">Add Issue</button>
    </form>
  );
};

export default AddIssues;
