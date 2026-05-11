import React from 'react';
import './Totals.css';

// Rasmlarni assets papkangizdan import qiling
import backgroundImage from '../../../assets/img37.png'; // Orqa fon uchun rasm
import logoImage from '../../../assets/img1.png';      // Oltin rangli logo

const Totals = () => {
  return (
    <div 
      className="cart-banner" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="cart-content">
        {/* Logo qismi */}
        <div className="cart-logo">
          <img src={logoImage} alt="Logo" className="cart-logo-img" />
        </div>

        {/* Asosiy yozuv */}
        <h1 className="cart-title">Cart</h1>

        {/* Breadcrumb navigatsiyasi */}
        <div className="breadcrumb">
          <span className="home-text">Home</span>
          <span className="arrow-icon">&gt;</span>
          <span className="current-text">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Totals;
