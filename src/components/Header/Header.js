import React from 'react';
import logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {
  return(
    <header className="page-header">
      <img className='logo' src={logo} alt="logo"/>
      <div>
        <button className='sign-in'>Sign In</button>
        <button className='create-account'>Create Account</button>
      </div>

    </header>
  )
}

export default Header;