import React, { useState, useRef, useEffect } from 'react'
import './Styles/MusicPlayer.css'

import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShare, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'

function MusicPlayer({ song, imgSrc, duration }) {
    const [isLove, setIsLove] = useState(false)
    const [isplay, setIsPlay] = useState(true)
    // const [duration, setDuration] = useState(0)

    const audioPlayer = useRef() //our audio tag
    const progressBar = useRef() //our progress bar

    

    function changeLoved(){
        setIsLove(!isLove)
        
    }

    function changePlayPause(){
        setIsPlay(!isplay)
        if(isplay){
            audioPlayer.current.play()
        }else {
            audioPlayer.current.pause()
        }
    }

    // useEffect(() => {
    //     const seconds = audioPlayer.current.duration;
    //     setDuration(seconds)
    // }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    // const [minute, setMinute] = useState

    // useEffect(() => {
    //     setMinute()
    // }, [])
    

  return (
    <div className='music-player'>
        <div className='song-img'>
            <img src={imgSrc} />
        </div>
        <div className='song-attributes'>
            <audio src={song}
                preload="metadata"
                ref={audioPlayer}
            />
            <div className='top'>
                <div className='left'>
                    <div className='loved' onClick={changeLoved}>
                        {isLove ? <i><FaHeart /></i> : <i><FaRegHeart /></i>}
                    </div>
                    <div className='download'><i><BsDownload /></i></div>
                </div>

                <div className='middle'>
                    <div className='back'>
                        <i><FaStepBackward /></i>
                        <i><FaBackward /></i>
                    </div>
                    <div className='play-pause' onClick={changePlayPause}>
                        {isplay ? <i><FaPlay /></i> : <i><FaPause /></i>}
                    </div>
                    <div className='forward'>
                        <i><FaForward /></i>
                        <i><FaStepForward /></i>
                    </div>
                </div>

                <div className='right'><i><FaShareAlt /></i></div>
            </div>
            <div className='bottom'>
                <div className='current-time'>00:00</div>
                <input 
                    type='range'
                    className='progress-bar'
                    ref={progressBar}
                />
                <div className='duration'>{duration ? `0${Math.floor(duration/60)}:${duration%60 < 10 ? '0' : ''}${duration%60}` : '00:00'}</div>
            </div>
        </div>
    </div>
  )
}

export default MusicPlayer