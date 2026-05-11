import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand and Address */}
          <div className="footer-section brand-info">
            <h2 className="footer-logo">Funiro.</h2>
            <address className="footer-address">
              400 University Drive Suite 200 Coral <br />
              Gables, <br />
              FL 33134 USA
            </address>
          </div>

          {/* Links Column */}
          <div className="footer-section">
            <h4 className="section-title">Links</h4>
            <nav className="footer-nav">
              <a href="/">Home</a>
              <a href="/shop">Shop</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>

          {/* Help Column */}
          <div className="footer-section">
            <h4 className="section-title">Help</h4>
            <nav className="footer-nav">
              <a href="/payment">Payment Options</a>
              <a href="/returns">Returns</a>
              <a href="/privacy">Privacy Policies</a>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div className="footer-section newsletter">
            <h4 className="section-title">Newsletter</h4>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2023 furino. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
