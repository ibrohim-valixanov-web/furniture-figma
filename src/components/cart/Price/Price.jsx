import React from 'react';
import './Price.css';

// Rasmlarni import qilish
import productImg from '../../../assets/img38.png';



import icon1 from '../../../assets/img39.png';
import icon2 from '../../../assets/img40.png';
import icon3 from '../../../assets/img41.png';
import icon4 from '../../../assets/img42.png';

const Price = () => {
  return (
    <div className="cart-page">
      {/* Savatcha va Hisob-kitob qismi */}
      <div className="cart-container">
        <div className="cart-main">
          <div className="cart-table-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          
          <div className="cart-item">
            <img src={productImg} alt="Asgaard sofa" className="product-img" />
            <span>Asgaard sofa</span>
            <span className="price">Rs. 250,000.00</span>
            <span><input type="number" defaultValue="1" className="qty-input" /></span>
            <span className="subtotal">Rs. 250,000.00</span>
            <span style={{color: '#B88E2F', cursor: 'pointer'}}>🗑️</span>
          </div>
        </div>

        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="total-row">
            <span style={{fontWeight: '500'}}>Subtotal</span>
            <span style={{color: '#9F9F9F'}}>Rs. 250,000.00</span>
          </div>
          <div className="total-row">
            <span style={{fontWeight: '500'}}>Total</span>
            <span className="amount">Rs. 250,000.00</span>
          </div>
          <button className="checkout-btn">Check Out</button>
        </div>
      </div>

      {/* Pastki 4 ta servis ikonkalari */}
      <div className="features-bar">
        <div className="feature-item">
          <img src={icon1} className="feature-icon" alt="Quality" />
          <div className="feature-text">
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>
        
        <div className="feature-item">
          <img src={icon2} className="feature-icon" alt="Warranty" />
          <div className="feature-text">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className="feature-item">
          <img src={icon3} className="feature-icon" alt="Shipping" />
          <div className="feature-text">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>

        <div className="feature-item">
          <img src={icon4} className="feature-icon" alt="Support" />
          <div className="feature-text">
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
