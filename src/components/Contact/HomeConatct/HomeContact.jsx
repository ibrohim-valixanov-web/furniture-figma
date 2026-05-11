import React from 'react'
import './HomeContact.css'
import img112 from "../../../assets/img112.png"   // <-- qo‘shildi
import img113 from "../../../assets/img113.png"

const HomeContact = () => {
  return (
    <div
      className='contact'
      style={{ backgroundImage: `url(${img112})` }}
    >
      <img src={img113} alt="" />
      <h2>Contact</h2>
      <h4>Home &gt; Contact</h4>
    </div>
  )
}

export default HomeContact