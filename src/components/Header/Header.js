import React from 'react';
import logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {
  return(
    <header className='page-header'>
      <img src={logo} alt="logo"/>
      <div>
        <a href='' className='sign-in'>Sign In</a>
        <a href='' className='create-account'>Create Account</a>
        {/* href values to be added as assets are received */}

      </div>

    </header>
  )
}

export default Header;