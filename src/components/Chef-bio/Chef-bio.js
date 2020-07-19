import React from 'react';


const ChefBio = (props) => {
  let { about } = props;
  return (
    <div className='chef-bio'>
      <div className='chef-bio--about'>
        <h2>About the Chef</h2>
        <p>{about}</p>
      </div>
      <div className='chef-bio--experience'>
        <h2>Experience</h2>
      </div>
      <div className='chef-bio--booking-req'>
        <h2>Booking Requirements</h2>
      </div>
      <div className='chef-bio--includes'>
        <h2>Meal Includes</h2>
      </div>
    </div>  
  )
}

export default ChefBio;