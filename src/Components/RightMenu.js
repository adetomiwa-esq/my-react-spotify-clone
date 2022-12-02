import React from 'react';
import './Styles/RightMenu.css';
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from 'react-icons/fa'

function RightMenu() {
  return (
    <div className='right-menu'>
      <div className='go-pro'>
        <i>
          <FaCrown />
          <p>
            Go <span>Pro</span>
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>

      <div className='profile'>
        <i><FaSun /></i>
        <i><FaCogs /></i>

        <div className='profile-img'>
          <img src='' />
        </div>
      </div>
    </div>
  )
}

export default RightMenu