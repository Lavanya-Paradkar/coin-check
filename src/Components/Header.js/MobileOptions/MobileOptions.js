import React from 'react';
import { Link } from 'react-router-dom';
import './MobileOptions.css';

const MobileOptions = ({openMobileMenu, setOpenMobileMenu}) => {
  return (
    <>
    {openMobileMenu &&
        <div className='mobileoptions' onMouseLeave={() => setOpenMobileMenu(false)}>
            <Link to='/calculator' style={{ textDecoration: 'none' }}>
                <div className='calculate__button' onClick={() => setOpenMobileMenu(false)}>
                    Calculator
                </div>
            </Link>
            <Link to='/chart' style={{ textDecoration: 'none' }} onClick={() => setOpenMobileMenu(false)}>
                <div className='charts__button'>
                    Charts
                </div>
            </Link>
        </div>
    }
    </>
  )
}

export default MobileOptions