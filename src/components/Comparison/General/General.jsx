import React from "react";
import "./General.css";
import img110 from "../../../assets/img110.png";
import img111 from "../../../assets/img111.png";

const products = [
  {
    id: 1,
    title: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: 4.7,
    reviews: 204,
    img: img110,
  },
  {
    id: 2,
    title: "Outdoor Sofa Set",
    price: "Rs. 224,000.00",
    rating: 4.2,
    reviews: 145,
    img: img111,
  },
];

const General = () => {
  const data = {
    general: [
      { label: "Sales Package", p1: "1 sectional sofa", p2: "1 Three Seater, 2 Single Seater" },
      { label: "Model Number", p1: "TFCBUGRBL6SRHS", p2: "DTUBUGRBL568" },
      { label: "Secondary Material", p1: "Solid Wood", p2: "Solid Wood" },
      { label: "Configuration", p1: "L-shaped", p2: "L-shaped" },
      { label: "Upholstery Material", p1: "Fabric + Cotton", p2: "Fabric + Cotton" },
      { label: "Upholstery Color", p1: "Bright Grey & Lion", p2: "Bright Grey & Lion" },
    ],
    product: [
      { label: "Filling Material", p1: "Foam", p2: "Matte" },
      { label: "Finish Type", p1: "Bright Grey & Lion", p2: "Bright Grey & Lion" },
      { label: "Adjustable Headrest", p1: "No", p2: "Yes" },
      { label: "Maximum Load Capacity", p1: "280 KG", p2: "300 KG" },
      { label: "Origin of Manufacture", p1: "India", p2: "India" },
    ],
    dimensions: [
      { label: "Width", p1: "265.32 cm", p2: "265.32 cm" },
      { label: "Height", p1: "76 cm", p2: "76 cm" },
      { label: "Depth", p1: "167.76 cm", p2: "167.76 cm" },
      { label: "Weight", p1: "45 KG", p2: "65 KG" },
      { label: "Seat Height", p1: "41.52 cm", p2: "41.52 cm" },
      { label: "Leg Height", p1: "5.46 cm", p2: "5.46 cm" },
    ],
    warranty: [
      { label: "Warranty Summary", p1: "1 Year Manufacturing Warranty", p2: "1.2 Year Manufacturing Warranty" },
      { label: "Warranty Service Type", p1: "operations@trevifurniture.com", p2: "support@xyz.com" },
      { label: "Covered in Warranty", p1: "Manufacturing Defect", p2: "Manufacturing defects only" },
      { label: "Not Covered", p1: "Not covered after usage", p2: "Not covered after usage" },
      { label: "Domestic Warranty", p1: "1 Year", p2: "3 Months" },
    ],
  };

  const renderSection = (title, rows) => (
    <>
      <div className="table-section-header">{title}</div>
      {rows.map((row, i) => (
        <div className="table-row" key={i}>
          <div className="table-cell label">{row.label}</div>
          <div className="table-cell">{row.p1}</div>
          <div className="table-cell">{row.p2}</div>
        </div>
      ))}
    </>
  );

  return (
    <div className="full">
      
      {/* TOP */}
      <div className="general">
        <div className="general-left">
          <h2>Go to Product page for more Products</h2>
          <a href="#" className="view-more">View More</a>
        </div>

        <div className="general-center">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-img">
                <img src={item.img} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="general-right">
          <h3>Add A Product</h3>
          <button className="btn">Choose a Product</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="comparison-container">
        <div className="comparison-table">

          {renderSection("General", data.general)}
          {renderSection("Product", data.product)}
          {renderSection("Dimensions", data.dimensions)}
          {renderSection("Warranty", data.warranty)}

          <div className="table-row-actions">
            <div></div>
            <div className="btns">
            <button className="add-to-cart" style={{backgroundColor: "#B88E2F", border: "none", color: "white"}}>Add To Cart</button>
            </div>
            <button className="add-to-cart" style={{backgroundColor: "#B88E2F", border: "none", color: "white"}}>Add To Cart</button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default General;