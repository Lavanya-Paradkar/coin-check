import React from 'react';
import './Header.css';
import coinlogo from '../Assets/coincheck_logo.png';
import { Link } from 'react-router-dom';

const Header = ({openMobileMenu, setOpenMobileMenu}) => {
  return (
    <div className='header'>
        <Link to='/'>
            <div className='header__logo'>
                <img
                    src={coinlogo}
                    width={200}
                    height={50}
                    alt='CoinCheck'
                />
            </div>
        </Link>

        <div className='header__tabs'>
            <Link to='/calculator' style={{ textDecoration: 'none' }}>
                <div className='calculator__button'>
                    Calculator
                </div>
            </Link>
            <Link to='/chart' style={{ textDecoration: 'none' }}>
                <div className='chart__button'>
                    Charts
                </div>
            </Link>
            
        </div>
        <div className='mobile__menu' onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            Menu
        </div>
        
    </div>
  )
}

export default Header