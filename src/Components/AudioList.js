import React, { useState, useEffect } from 'react'
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from 'react-icons/fa';
import MusicPlayer from './MusicPlayer';

function AudioList() {
  const [songList, setSongList] = useState([])

  useEffect(() =>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b77dc27d6cmsh091c94904e49b55p1d43dfjsnf82af3890f05',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=chris%20brown', options)
      .then(response => response.json())
      .then(response => setSongList(response.data))
      .catch(err => console.error(err));
  }, [])

  
  const [song, setSong] = useState()
  const [img, setImg] = useState()
  const [songDuration, setSongDuration] = useState()


  function flipFavorite(index){
    const myList = [...songList]
    myList[index].readable = !myList[index].readable
    setSongList(myList)
    
    // console.log(myList)
  }

  useEffect(() => {
    const allSongs = document.querySelector(".songs-container").querySelectorAll(".songs")

    allSongs.forEach(song => {
      song.addEventListener('click', changeActive)
    })

    function changeActive() {
      allSongs.forEach(song => song.classList.remove("active"))
      this.classList.add("active")
    }
  }, [])

  
  function setMainSong(imgSrc, songSrc, duration){
    setImg(imgSrc)
    setSong(songSrc)
    setSongDuration(duration)
  }

  return (
    <div className='audio-list'>
        <h2 className='title'>
            {/* The list <span>{myList.length} songs</span> */}
        </h2>
        <div className='songs-container'>
          {songList.map((song, index) => { 
            return <div className='songs' key={song.id}
                    onClick={() => setMainSong(song.artist.picture_big, song.preview, song.duration)}
                    >
                <div className='count'>{`#${index < 9 ? '0' : ''}${index + 1}`}</div>
                <div className='song'>

                  <div className='img-box'>
                    <img src={song.artist.picture_big} alt='' />
                  </div>

                  <div className='section'>
                    <p className='song-name'>
                      {song.title} <span className='span-artist'>{song.artist.name}</span>
                    </p>

                    <div className='hits'>
                      <p className='hit'>
                        <i><FaHeadphones /></i> {song.rank}
                      </p>

                      <p className='duration init-duration'>
                        <i><FaRegClock/></i> 03.04
                      </p>

                      <div className='favorite' onClick={() => flipFavorite(index)}>
                        {
                          song.readable ? <i><FaRegHeart /></i> : <i><FaHeart /></i>
                        } 
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          })}
            
        </div>
        <MusicPlayer song={song} imgSrc={img} duration={songDuration} />
    </div>
  )
}

export default AudioList