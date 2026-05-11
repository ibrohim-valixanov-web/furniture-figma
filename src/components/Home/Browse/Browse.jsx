import React from 'react'
import "./Browse.css"

import diningImg from '../../../assets/img3.png';
import livingImg from '../../../assets/img4.png';
import bedroomImg from '../../../assets/img5.png';

const Browse = () => {
  return (
    <div>
      <section className="browse-range">
      <div className="container">
        <div className="section-header">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="categories">
          <div className="category-card">
            <div className="card-image">
              <img src={diningImg} alt="Dining" />
            </div>
            <h3>Dining</h3>
          </div>

          <div className="category-card">
            <div className="card-image">
              <img src={livingImg} alt="Living" />
            </div>
            <h3>Living</h3>
          </div>

          <div className="category-card">
            <div className="card-image">
              <img src={bedroomImg} alt="Bedroom" />
            </div>
            <h3>Bedroom</h3>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Browse
