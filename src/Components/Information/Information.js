import React from 'react';
import Cards from '../Cards/Cards';
import './Information.css';

const Information = () => {
  return (
    <div className='information'>
        <div className='information__heading'>
            What is Blockchain?
        </div>
        <div className='information__cards'>
            <Cards/>
        </div>
    </div>
  )
}

export default Information