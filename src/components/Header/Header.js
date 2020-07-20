import React from 'react';
import logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {
  return(
    <header className='page-header'>
      <img src={logo} alt="logo"/>
      <div>
        <a className='sign-in'>Sign In</a>
        <a className='create-account'>Create Account</a>
      </div>

    </header>
  )
}

export default Header;