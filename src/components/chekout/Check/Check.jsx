import React from 'react';
import './Check.css';
// Ikonkalarni assets'dan import qilamiz
import icon1 from '../../../assets/img39.png';
import icon2 from '../../../assets/img40.png';
import icon3 from '../../../assets/img41.png';
import icon4 from '../../../assets/img42.png';



const Check = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Billing Details */}
        <div className="billing-details">
          <h2>Billing details</h2>
          <div className="form-row">
            <div className="form-group" style={{flex: 1}}>
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="form-group" style={{flex: 1}}>
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-group">
            <label>Company Name (Optional)</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Country / Region</label>
            <select><option>Sri Lanka</option></select>
          </div>
          <div className="form-group">
            <label>Street address</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Town / City</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>ZIP code</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" />
          </div>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <div className="summary-header">
            <h3>Product</h3>
            <h3>Subtotal</h3>
          </div>
          <div className="summary-row">
            <span style={{color: '#9F9F9F'}}>Asgaard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="summary-row">
            <span>Total</span>
            <span className="total-price">Rs. 250,000.00</span>
          </div>

          <div className="payment-methods">
            <div className="method-item">
              <input type="radio" name="payment" id="bank" defaultChecked />
              <label htmlFor="bank" style={{fontWeight: 600}}>Direct Bank Transfer</label>
              <p className="payment-desc">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. 
              </p>
            </div>
            <div className="method-item">
              <input type="radio" name="payment" id="cash" />
              <label htmlFor="cash">Cash On Delivery</label>
            </div>
            <p className="privacy-notice">
              Your personal data will be used to support your experience throughout this website... <strong>privacy policy.</strong>
            </p>
            <button className="place-order-btn">Place order</button>
          </div>
        </div>
      </div>

      {/* Footer Features */}
      <div className="features-footer">
        <div className="feature-box">
          <img src={icon1} alt="Quality" width="60" />
          <div><h4 style={{margin:0}}>High Quality</h4><p style={{margin:0, color:'#898989'}}>crafted from top materials</p></div>
        </div>
        <div className="feature-box">
          <img src={icon2} alt="Warranty" width="60" />
          <div><h4 style={{margin:0}}>Warranty Protection</h4><p style={{margin:0, color:'#898989'}}>Over 2 years</p></div>
        </div>
        <div className="feature-box">
          <img src={icon3} alt="Shipping" width="60" />
          <div><h4 style={{margin:0}}>Free Shipping</h4><p style={{margin:0, color:'#898989'}}>Order over 150 $</p></div>
        </div>
        <div className="feature-box">
          <img src={icon4} alt="Support" width="60" />
          <div><h4 style={{margin:0}}>24 / 7 Support</h4><p style={{margin:0, color:'#898989'}}>Dedicated support</p></div>
        </div>
      </div>
    </div>
  );
};

export default Check;
