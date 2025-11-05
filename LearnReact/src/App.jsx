import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Inventory from './components/Inventory';
import LuxuryCarsStock from './components/LuxuaryCarsStock';
import CarDetails from './components/CarDetails';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* ================== HEADER ================== */}
      <Header Heading="Big Boy Cars" />

      <Routes>
        {/* ================== HOMEPAGE → INVENTORY ================== */}
        <Route path="/" element={
          <>
            <Inventory />

            {/* ================== LUXURY CARS SECTION ================== */}
            <div
              className="lux-car"
              style={{
                backgroundColor: '#000',
                color: '#fff',
                textAlign: 'center',
                padding: '60px 20px',
                fontFamily: 'Poppins, sans-serif',
                minHeight: '100vh',
              }}
            >
              <h1
                style={{
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
              >
                Luxury Cars
              </h1>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '40px',
                  maxWidth: '1400px',
                  margin: '0 auto',
                }}
              >
                <LuxuryCarsStock
                  Carname="Rolls-Royce Phantom"
                  Details="Handcrafted elegance, V12 Smooth."
                  price="11.0 Cr"
                  img="https://c4.wallpaperflare.com/wallpaper/850/823/804/rolls-royce-phantom-hd-wallpaper-preview.jpg"
                />

                <LuxuryCarsStock
                  Carname="Bentley - Mulsanne"
                  Details="Royal comfort, powerful V8 engine"
                  price="5.5 Cr"
                  img="https://www.cnet.com/a/img/resize/db614a496660ef36f39cece12e098ffdb154c999/hub/2018/07/10/7f7e3921-96ec-49f4-803b-b472629d7b83/002-bentley-wo-mulliner.jpg?auto=webp&width=1200"
                />

                <LuxuryCarsStock
                  Carname="Mercedes-Maybach S680"
                  Details="Ultra-luxury sedan, V12 craftsmanship"
                  price="3.5 Cr"
                  img="https://klassen.de/media/images/news/original/1x64cy8w5a53gm6b19v36h471x9h033p.jpg"
                />
              </div>
            </div>
          </>
        } />

        {/* ================== DYNAMIC ROUTE → CAR DETAILS ================== */}
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>

      {/* ================== FOOTER ================== */}
      <Footer email="contact@gmail.com" />
    </Router>
  );
}

export default App;
