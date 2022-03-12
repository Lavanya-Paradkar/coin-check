import React from 'react';
import home_background from '../Assets/wallpaper.webp';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage__bg'>
            <img
                src={home_background}
                width='100%'
                height='100%'
                alt=''
            />
        </div>
        <div className='homepage__title'>
            <div className='title__heading'>
                Is Bitcoin Safe?
            </div>
        </div>
    </div>
  )
}

export default Homepage