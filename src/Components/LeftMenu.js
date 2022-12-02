import React from 'react';
import './Styles/LeftMenu.css'
import { MenuList } from './MenuList';
import Menu from './Menu';
import MenuPlaylist from './MenuPlaylist';
import TrackList from './TrackList';


function LeftMenu() {
  return (
    <div className='left-menu'>
        <div className='logo-container'>
            <i className='fa fa-spotify'></i>
            <h2>Spotify</h2>
            <i className='fas fa-ellipsis'></i>
        </div>
        <div className='search-box'>
            <input 
                type='text'
                placeholder='search...'
            />
            <i className='fas fa-search'></i>
        </div>

        <Menu 
          title={'Menu'}
          MenuList = {MenuList}
        />

        <MenuPlaylist />

        <TrackList />
    </div>
  )
}

export default LeftMenu;