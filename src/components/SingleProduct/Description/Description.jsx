import React, { useState } from 'react';
import './Description.css';

// Rasmlar (assets papkasidan)
import descImg1 from '../../../assets/img31.png';  // Chapdagi sofa
import descImg2 from '../../../assets/img32.png';  // O'ngdagi sofa

const Description = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="description-section">
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button 
          className={`tab-btn ${activeTab === 'additional' ? 'active' : ''}`}
          onClick={() => setActiveTab('additional')}
        >
          Additional Information
        </button>
        <button 
          className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews [5]
        </button>
      </div>

      {activeTab === 'description' && (
        <>
          <div className="description-text">
            <p>
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker 
              takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. 
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, 
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs 
              for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune 
              the controls to your personal preferences while the guitar-influenced leather strap enables 
              easy and stylish travel.
            </p>
          </div>

          {/* Ikki ta rasm */}
          <div className="description-images">
            <div className="desc-image-box">
              <img src={descImg1} alt="Sofa view 1" />
            </div>
            <div className="desc-image-box">
              <img src={descImg2} alt="Sofa view 2" />
            </div>
          </div>
        </>
      )}

      {activeTab === 'additional' && (
        <div className="description-text">
          <p>Additional Information content will be added here...</p>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="description-text">
          <p>Customer Reviews will be shown here...</p>
        </div>
      )}
    </div>
  );
};

export default Description;