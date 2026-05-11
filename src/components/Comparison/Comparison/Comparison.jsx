import React from 'react'
import './Comparison.css'
import img112 from "../../../assets/img112.png"
import img113 from "../../../assets/img113.png"
const Comparison = () => {
  return (
    <div className='comparison' style={{backgroundImage: `url(${img112})`}}>
      <img src={img113} alt="" />
      <h2>Product Comparison</h2>
      <h4>Home  &gt;  Comparison</h4>
    </div>
  )
}

export default Comparison
