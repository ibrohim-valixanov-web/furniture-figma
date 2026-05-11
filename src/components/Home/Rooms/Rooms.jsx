import React from 'react';
import './Rooms.css';

import room1 from '../../../assets/img14.png';
import room2 from '../../../assets/img15.png';
// import room3 from '../../../assets/img16.png';


const Rooms = () => {
  return (
   <section className="inspiration-section">
      <div className="inspiration-wrapper">
        
        {/* 1. Matn qismi */}
        <div className="inspiration-text">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
          <button className="explore-btn">Explore More</button>
        </div>

        {/* 2. Galereya qismi */}
        <div className="rooms-gallery">
          
          {/* Asosiy rasm (Overlay bilan) */}
          <div className="main-room">
            <img src={room1} alt="Bed Room" />
            <div className="room-overlay-card">
              <span>01 — Bed Room</span>
              <h3>Inner Peace</h3>
              <button className="arrow-btn-gold">→</button>
            </div>
          </div>

          {/* Yon rasm va pastdagi nuqtalar */}
          <div className="side-images-wrapper">
            <div className="side-room">
              <img src={room2} alt="Living Room" />
            </div>
            
            <div className="slider-dots">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Rooms;