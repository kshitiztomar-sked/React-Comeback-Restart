import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Inventory.css";
import lamborghini from '../assets/aventador_svj_overview.webp';
import Ferrari from '../assets/pexels-hugosykes-18087745.jpg';
import Porsche from '../assets/42498-large.webp';

const Inventory = () => {
  const navigate = useNavigate();

  const cars = [
    { id: 1, name: "Lamborghini Aventador", price: "₹4.8 Cr", image: lamborghini, description: "A V12 beast with iconic scissor doors." },
    { id: 2, name: "Ferrari 812 Superfast", price: "₹5.2 Cr", image: Ferrari, description: "The fastest naturally aspirated V12 road car." },
    { id: 3, name: "Porsche 911 Turbo S", price: "₹3.2 Cr", image: Porsche, description: "Luxury meets speed with twin-turbo performance." },
  ];

  const handleViewDetails = (id) => {
    navigate(`/car/${id}`);
  };

  return (
    <div className="inventory">
      <h2                 style={{
                  fontSize: '2.8rem',
                  color: '#ff2b2b',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  borderBottom: '3px solid #ff2b2b',
                  display: 'inline-block',
                  paddingBottom: '10px',
                  marginBottom: '50px',
                  fontWeight: '700',
                  textShadow: '0 0 20px rgba(255, 0, 0, 0.4)',
                }}
              >SUPER CARS</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <button onClick={() => handleViewDetails(car.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
