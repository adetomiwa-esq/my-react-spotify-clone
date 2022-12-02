import React, { useState } from 'react';
import RightMenu from '../RightMenu';
import LeftMenu from '../LeftMenu';
import MainContainer from '../MainContainer';
import '../Styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <LeftMenu />
        <MainContainer />
        <RightMenu />
        <div className='background'></div>
    </div>
  )
}

export default Home;