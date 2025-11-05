import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import lamborghini from "../assets/aventador_svj_overview.webp";
import Ferrari from "../assets/pexels-hugosykes-18087745.jpg";
import Porsche from "../assets/42498-large.webp";
import "../styles/CarDetails.css";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      name: "Lamborghini Aventador SVJ",
      price: "₹4.8 Cr",
      image: lamborghini,
      description:
        "The pinnacle of Lamborghini performance — the Aventador SVJ combines breathtaking V12 power, extreme aerodynamics, and iconic Italian design. Its carbon-fiber construction and aggressive aerodynamics make it a legend on and off the track.",
    },
    {
      id: 2,
      name: "Ferrari 812 Superfast",
      price: "₹5.2 Cr",
      image: Ferrari,
      description:
        "Pure Ferrari soul — the 812 Superfast is the most powerful naturally aspirated V12 Ferrari ever made, redefining grand touring performance. Unmatched control, sculpted perfection, and the heart of a true Italian masterpiece.",
    },
    {
      id: 3,
      name: "Porsche 911 Turbo S",
      price: "₹3.2 Cr",
      image: Porsche,
      description:
        "A timeless masterpiece — the 911 Turbo S delivers precision handling, unmatched comfort, and ferocious twin-turbo power for everyday driving luxury. The perfect blend of performance, prestige, and precision.",
    },
  ];

  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <h2 style={{ textAlign: "center", color: "#ff2b2b" }}>Car not found!</h2>
    );
  }

  return (
    <div className="car-details-page">
      <div className="back-btn-container">
        <button onClick={() => navigate("/")}>← Back to Super Cars</button>
      </div>

      <div className="car-showcase">
        <div className="car-visual">
          <img src={car.image} alt={car.name} className="car-image" />
          <div className="glow-overlay"></div>
        </div>

        <div className="car-details-card">
          <h1>{car.name}</h1>
          <p className="price">{car.price}</p>
          <hr />
          <p className="description">{car.description}</p>

          <div className="btn-group">
            <button className="book-btn">Book a Test Drive</button>
            <button className="explore-btn">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
