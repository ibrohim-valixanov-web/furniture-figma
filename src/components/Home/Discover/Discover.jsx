import React from 'react'
import './Discover.css'
import heroBg from '../../../assets/img2.png';   // ← o'zingizning rasmingiz nomini qo'ying

const Discover = () => {
  return (
    <div>
      <section className="hero">
      <div className="hero-content">
        {/* Chap tarafdagi rasm fon sifatida */}
        <div className="hero-image">
          <img src={heroBg} alt="Modern interior" />
        </div>

        {/* O'ng tarafdagi matn bloki */}
        <div className="hero-text-box">
          <p className="new-arrival">New Arrival</p>
          <h1>Discover Our New Collection</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="buy-now-btn">BUY NOW</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Discover
