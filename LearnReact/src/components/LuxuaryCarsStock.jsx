import React, { useState } from 'react';
import "../styles/LuxuryCarsStock.css";

const LuxuryCarsStock = (props) => {
  const [count, setCount] = useState(0);

  const handleViewClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="luxuryCarsShow">
      <div className="Card-cars">
        <div className="view-badge">{count} ❤️</div>
        <div>
          <img src={props.img} alt={props.Carname} />
        </div>
        <div className="Details">
          <h2 className="Carname">{props.Carname}</h2>
          <p className="cardetails">{props.Details}</p>
          <p className="carprice">₹ {props.price} /-</p>
          <button onClick={handleViewClick}>View</button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryCarsStock;
