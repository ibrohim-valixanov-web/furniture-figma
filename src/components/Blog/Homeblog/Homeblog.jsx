import React from 'react'
import './Homeblog.css'
import img112 from "../../../assets/img112.png"
import img113 from "../../../assets/img113.png"
const Homeblog = () => {
  return (
    <div className='comparison' style={{backgroundImage: `url(${img112})`}}>
      <img src={img113} alt="" />
      <h2>Blog</h2>
      <h4>Home  &gt;  Blog</h4>
    </div>
  )
}

export default Homeblog
