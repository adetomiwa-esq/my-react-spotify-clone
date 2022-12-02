import React from 'react'
import {BsFillVolumeUpFill, BsMusicNoteList} from 'react-icons/bs';
import {FaDesktop} from 'react-icons/fa'
import Track from '../images/images.jpeg'

function TrackList() {
  return (
    <div className='track-list'>
      <div className='top'>
        <img src={Track} alt='' />
        <p className='track-name'>
          Sample Name <span className='track-span'>Artist</span>
        </p>
      </div>
      <div className='bottom'>
        <i><BsFillVolumeUpFill /></i>
        <input type='range' />
        <i><BsMusicNoteList /></i>
        <i><FaDesktop /></i>
      </div>
    </div>
  )
}

export default TrackList