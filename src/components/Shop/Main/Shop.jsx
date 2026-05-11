import React from 'react'
import "./Shop.css"
 import img100 from "../../../assets/img100.png"
const Shop = () => {
  return (
  <div className="shop">
      <div className="shop-banner">
        <img src={img100} alt="shop banner" />
        <div className="shop-banner-text">
          <h1>Shop</h1>
          <h4>Home &gt; Shop</h4>
        </div>
      </div>

      <div className="shop-filter">
        <div className="left">
          <span>🔧 Filter</span>
          <span className="divider"></span>
          <span>Showing 1-16 of 32 results</span>
        </div>

        <div className="right">
          <div className="control">
            <label>Show</label>
            <select>
              <option>16</option>
              <option>32</option>
            </select>
          </div>

          <div className="control">
            <label>Short by</label>
            <select>
              <option>Default</option>
              <option>Price</option>
              <option>Name</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
