import React, { useState } from 'react';
import './Sofa.css';

import imgMain from '../../../assets/img26.png';
import img1 from '../../../assets/img27.png';
import img2 from '../../../assets/img28.png';
import img3 from '../../../assets/img29.png';
import img4 from '../../../assets/img30.png';

const Sofa = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(imgMain);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState(0);

  const sideImages = [img1, img2, img3, img4];
  const colors = ['#816dfa', '#000000', '#b88e2f'];

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>
          <a href="#">Home</a> &gt; 
          <a href="#">Shop</a> &gt; 
        </span>
        <strong>Asgaard sofa</strong>
      </div>

      <div className="product-container">
        {/* Gallery */}
        <div className="product-gallery">
          <div className="side-previews">
            {sideImages.map((img, index) => (
              <div
                key={index}
                className={`preview-item ${selectedImg === img ? 'active' : ''}`}
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} alt={`Preview ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="main-display">
            <img src={selectedImg} alt="Asgaard sofa" />
          </div>
        </div>

        {/* Product Information */}
        <div className="product-info">
          <h1>Asgaard sofa</h1>
          <p className="price">Rs. 250,000.00</p>

          <div className="rating">
            <span className="stars">★★★★☆</span>
            <span className="reviews">5 Customer Review</span>
          </div>

          <p className="description">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, 
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size */}
          <div className="option-group">
            <span>Size</span>
            <div className="size-options">
              {['L', 'XL', 'XS'].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? 'active' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="option-group">
            <span>Color</span>
            <div className="color-options">
              {colors.map((color, i) => (
                <div
                  key={i}
                  className="color-dot"
                  style={{
                    backgroundColor: color,
                    border: selectedColor === i ? '2px solid #b88e2f' : '2px solid #fff'
                  }}
                  onClick={() => setSelectedColor(i)}
                />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="action-row">
            <div className="quantity-selector">
              <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>-</button>
              <span style={{ margin: '0 20px', fontSize: '16px' }}>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>

            <button className="add-to-cart">Add To Cart</button>
            <button className="compare">+ Compare</button>
          </div>

          {/* Meta Info */}
          <div className="meta-info">
            <p><strong>SKU</strong> : SS001</p>
            <p><strong>Category</strong> : Sofas</p>
            <p><strong>Tags</strong> : Sofa, Chair, Home, Shop</p>
            <p>
              <strong>Share</strong> : 
              <span style={{ marginLeft: '15px' }}>📘 &nbsp; 🔗 &nbsp; 🐦</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sofa;