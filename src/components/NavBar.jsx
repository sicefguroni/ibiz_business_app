import React from 'react';
import { Link } from 'react-router-dom';
import basketIcon from '../assets/basket-icon.svg';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <h1 className='navbar-logo'>TECHKORA</h1>
        <div className='navbar-menu'>
          <ul className='navbar-menu-list'>
            <li><Link to='/'>Overview</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/contact'>What we offer</Link></li>
            <li><Link to='/services'>Contact us</Link></li>
            <li><Link to='/products'>Our blog</Link></li>
          </ul>
        </div>
        <div className='navbar-buttons'>
          <button className='button-basket' type='button'>
              <img src={basketIcon} alt='Basket Icon' className='w-6 h-6'/>
          </button>  
          <button className='button' type='button'>
              <Link to='/signup'>Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;