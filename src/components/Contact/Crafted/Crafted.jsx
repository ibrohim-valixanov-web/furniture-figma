import React from "react";
import "./Crafted.css";
import img106 from "../../../assets/img106.png";
import img107 from "../../../assets/img107.png";
import img108 from "../../../assets/img108.png";
import img109 from "../../../assets/img109.png";
import { useEffect } from "react";
const Warranty = () => {
  return (
    <div className="warranty111">
      <div className="warranty2">
        <img src={img106} alt="" />
        <div className="warranty3">
          <h3>High Quality</h3>
          <p>crafted from top materials</p>
        </div>
      </div>
       <div className="warranty2">
        <img src={img107} alt="" />
        <div className="warranty3">
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
      </div>
      
       <div className="warranty2">
      
        <img src={img108} alt="" />
        <div className="warranty3">
          <h3>Free Shipping</h3>
          <p>Order over 150 $</p>
        </div>
      </div>
       <div className="warranty2">
        <img src={img109} alt="" />
        <div className="warranty3">
          <h3>24 / 7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </div>
     
    </div>
  );
};

export default Warranty;
