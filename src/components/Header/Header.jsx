import React from 'react'
import './Header.css'
import logo from '../../assets/img1.png'
import { FaUserCheck } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";




const Header = () => {
  return (
    <div>
 <header>
      <div className="header-container">
        <div className="furnit">
          <img src={logo} alt="Furniro" />
          <h1>Furniro</h1>
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="icons">
          <FaUserCheck />
          <CiSearch />
          <CiHeart />
          <MdOutlineShoppingCart />
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header
