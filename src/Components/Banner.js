import React from 'react';
import Michael from '../images/Michael-Jackson4.jpg';
import Check from '../images/check.jpeg'
import { FaEllipsisH, FaHeadphones, FaCheck } from 'react-icons/fa'

function Banner() {
  return (
    <div className='banner'>
        <img src={Michael} alt='' className='banner-img' />

        <div className='content'>
            <div className='bread-crump'>
                <p>
                    Home <span>/Popular Artist</span>
                </p>
                <i><FaEllipsisH /></i>
            </div>

            <div className='artist'>
                <div className='left'>
                    <div className='name'>
                        <h2>A-ha</h2>
                        <img className='check' src={Check} alt='' />
                    </div>

                    <p><i><FaHeadphones /></i> 11,184,1811 <span>Monthly listeners</span></p>
                </div>

                <div className='right'>
                    <a href='#'>play</a>
                    <a href='#'>
                        <i>
                            <FaCheck />
                        </i>
                        Following
                    </a>
                </div>
            </div>
        </div>
        <div className='bottom-layer'></div>
    </div>
  )
}

export default Banner