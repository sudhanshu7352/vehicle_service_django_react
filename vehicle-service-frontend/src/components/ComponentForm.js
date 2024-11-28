import React, { useState } from 'react';

const ComponentForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isRepair, setIsRepair] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const componentData = { name, price, is_repair: isRepair };

    fetch('http://localhost:8000/api/components/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(componentData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Component registered:', data);
        alert("Component registered, thanks!")
        setName('');
        setPrice('');
        setIsRepair(false);
      })
      .catch(error => {
        console.error('Error registering component:', error);
        alert('Error registering component:')
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{"border":"2px solid grey","padding":"2%"}}>
      <h2>Register Component</h2>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Price:</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
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
      <button type="submit">Register Component</button>
    </form>
  );
};

export default ComponentForm;
