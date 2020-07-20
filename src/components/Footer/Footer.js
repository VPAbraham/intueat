import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='question-link'>
        <h4>Have Questions?</h4>
        <a>Contact Intueat</a>
      </div>
      <div className='rights-res'>
        <p>INTUEAT ©2020 ALL RIGHTS RESERVED</p>
        <span>
          <a>PRIVATE POLICY</a>
          <a>TERMS AND CONDITIONS</a>
        </span>
      </div>
    </div>
  )
}

export default Footer;