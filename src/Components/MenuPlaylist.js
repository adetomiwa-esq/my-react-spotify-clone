import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Playlist } from './Playlist'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'


function MenuPlaylist() {
  return (
    <div className='playlist-container'>
        <div className='name-container'>
            <p>Playlists</p>
            <i>
                <FaPlus/>
            </i>
        </div>

        <div className='playlist-scroll'>
          {
              Playlist.map(list => {
                  return <div key={list.id} className='playlist'>
                    <i className='list'>
                        <BsMusicNoteList />
                    </i>
                
                    <p>{list.name}</p>
                
                    <i className='trash'>
                        <BsTrash />
                    </i>
                  </div>
              })
          }
        </div>
    </div>
  )
}

export default MenuPlaylist