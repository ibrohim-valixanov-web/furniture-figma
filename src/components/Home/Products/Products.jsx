import React from 'react';
import './Products.css';

// Rasmlarni import qiling (assets papkasiga joylang)
import p1 from '../../../assets/img6.png';
import p2 from '../../../assets/img9.png';
import p3 from '../../../assets/img7.png';
import p4 from '../../../assets/img8.png';
import p5 from '../../../assets/img10.png';
import p6 from '../../../assets/img11.png';
import p7 from '../../../assets/img12.png';
import p8 from '../../../assets/img13.png';



const products = [
  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "2.500.000",
    oldPrice: "3.500.000",
    discount: "-30%",
    image: p1,
    badgeColor: "red"
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "2.500.000",
    image: p2,
    isOverlay: true
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "7.000.000",
    oldPrice: "14.000.000",
    discount: "-50%",
    image: p3,
    badgeColor: "red"
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "500.000",
    image: p4,
    badge: "New",
    badgeColor: "green"
  },
  {
    id: 5,
    name: "Grifo",
    desc: "Night lamp",
    price: "1.500.000",
    image: p5
  },
  {
    id: 6,
    name: "Muggo",
    desc: "Small mug",
    price: "150.000",
    image: p6,
    badge: "New",
    badgeColor: "green"
  },
  {
    id: 7,
    name: "Pingky",
    desc: "Cute bed set",
    price: "7.000.000",
    oldPrice: "14.000.000",
    discount: "-50%",
    image: p7,
    badgeColor: "red"
  },
  {
    id: 8,
    name: "Potty",
    desc: "Minimalist flower pot",
    price: "500.000",
    image: p8,
    badge: "New",
    badgeColor: "green"
  }
];

const Products = () => {
  return (
    <section className="our-products">
      <div className="container">
        <h2>Our Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                
                {product.discount && (
                  <span className={`badge discount ${product.badgeColor}`}>
                    {product.discount}
                  </span>
                )}
                {product.badge && (
                  <span className={`badge new ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                )}

                {product.isOverlay && (
                  <div className="overlay">
                    <button className="add-to-cart">Add to cart</button>
                    <div className="actions">
                      <span>↗ Share</span>
                      <span>⇄ Compare</span>
                      <span>♡ Like</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="price">
                  <span className="current">Rp {product.price}</span>
                  {product.oldPrice && (
                    <span className="old">Rp {product.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="show-more">
          <button>Show More</button>
        </div>
      </div>
    </section>
  );
};

export default Products;