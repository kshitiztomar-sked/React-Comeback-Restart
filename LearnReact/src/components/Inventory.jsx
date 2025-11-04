import React, { useState } from 'react';
import "../styles/Inventory.css";
import lamborghini from '../assets/aventador_svj_overview.webp';
import Ferrari from '../assets/pexels-hugosykes-18087745.jpg';
import Porsche from '../assets/42498-large.webp';
import Buggati from '../assets/download.jpeg';

const Inventory = () => {
  const cars = [
    { id: 1, name: "Lamborghini Aventador", price: "₹4.8 Cr", image: lamborghini },
    { id: 2, name: "Ferrari 812 Superfast", price: "₹5.2 Cr", image: Ferrari },
    { id: 3, name: "Porsche 911 Turbo S", price: "₹3.2 Cr", image: Porsche },
    { id: 4, name: "Buggati Divo", price: "₹7.2 Cr", image: Buggati },
  ];

  // Har car ka view count state me store
  const [views, setViews] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  // Jab button dabaye, tab +1
  const handleView = (id) => {
    setViews((prev) => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  return (
    <div className="inventory">
      <h2>Luxury Cars Inventory</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <p>Views: {views[car.id]}</p>
            <button onClick={() => handleView(car.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
