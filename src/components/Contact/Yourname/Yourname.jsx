import React from 'react'
import './Yourname.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
const Yourname = () => {
  return (
       <div className="touch">
      <div className="touch-header">
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="touch-container">
        {/* LEFT */}
        <div className="touch-left">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Phone</h4>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
          </div>

          <div className="info-box">
            <FaClock className="icon" />
            <div>
              <h4>Working Time</h4>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="touch-right">
          <form>
            <label>Your name</label>
            <input type="text" placeholder="Abc" />

            <label>Email address</label>
            <input type="email" placeholder="Abc@def.com" />

            <label>Subject</label>
            <input type="text" placeholder="This is an optional" />

            <label>Message</label>
            <textarea placeholder="Hi! i’d like to ask about"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Yourname
