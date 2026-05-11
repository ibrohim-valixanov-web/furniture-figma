import React from "react";
import "./Card.css";
import img101 from "../../../assets/img101.png";
import img105 from "../../../assets/img105.png";
import img103 from "../../../assets/img103.png";
import img104 from "../../../assets/img104.png";

const products = [
  {
    id: 1,
    img: img101,
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    old: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 2,
    img: img105,
    title: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    old: null,
    discount: null,
  },
  {
    id: 3,
    img: img103,
    title: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    old: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    id: 4,
    img: img104,
    title: "Respira",
    desc: "Outdoor bar table",
    price: "Rp 500.000",
    old: null,
    discount: null,
  },
];

export default function Card() {
  return (
    <div className="container">
      <div className="grid">
        {Array(4)
          .fill(products)
          .flat()
          .map((item, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                {item.discount && (
                  <span className="discount">{item.discount}</span>
                )}
              </div>

              <div className="card-body">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>

                <div className="price">
                  <span className="new">{item.price}</span>
                  {item.old && <span className="old">{item.old}</span>}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="pagination">
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <button>Next</button>
      </div>
    </div>
  );
}
