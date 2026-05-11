import React from 'react';
import './Product.css';

// Rasmlarni assets dan import qiling
import prod1 from '../../../assets/img33.png'; // Syltherine
import prod2 from '../../../assets/img34.png'; // Leviosa
import prod3 from '../../../assets/img35.png'; // Lolito
import prod4 from '../../../assets/img36.png'; // Respira

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "-30%",
      image: prod1,
    },
    {
      id: 2,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: null,
      discount: null,
      image: prod2,
    },
    {
      id: 3,
      name: "Lolito",
      desc: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
      image: prod3,
    },
    {
      id: 4,
      name: "Respira",
      desc: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: null,
      discount: "New",
      image: prod4,
    },
  ];

  return (
    <div className="related-products">
      <h2 className="related-title">Related Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              
              {product.discount && (
                <div className={`discount-badge ${product.discount === 'New' ? 'new' : ''}`}>
                  {product.discount}
                </div>
              )}
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              
              <div className="price">
                <span className="current">{product.price}</span>
                {product.oldPrice && (
                  <span className="old">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more">
        <button className="show-more-btn">Show More</button>
      </div>
    </div>
  );
};

export default Product;