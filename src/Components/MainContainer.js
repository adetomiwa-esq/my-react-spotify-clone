import React, {useEffect} from 'react';
import Banner from './Banner';
import './Styles/MainContainer.css';
import {FaUsers} from 'react-icons/fa'
import AudioList from './AudioList';


function MainContainer() {
  useEffect(() => {
    const menuList = document.querySelector('.menu-list ul').querySelectorAll('li')

    const firstMenu = document.querySelector('.menu-list ul').querySelector('li')

    firstMenu.classList.add("active")

    menuList.forEach(menu => {
      menu.addEventListener('click', makeActive)
    })

    function makeActive(){
      menuList.forEach(x => x.classList.remove('active'))
      this.classList.add('active')
    }
  }, [])


  return (
    <div className='main-container'>
      <Banner />

      <div className='menu-list'>
        <ul>
          <li><a href='#'>Popular</a></li>
          <li><a href='#'>Albums</a></li>
          <li><a href='#'>Songs</a></li>
          <li><a href='#'>Fans</a></li>
          <li><a href='#'>About</a></li>
        </ul>

        <p><i><FaUsers /></i> 12.3m <span>followers</span></p>
      </div>
      <AudioList />
    </div>
  )
}

export default MainContainer