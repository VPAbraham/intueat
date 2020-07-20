import React from 'react';


const ChefBio = (props) => {
  let { about, experience, requirements, includes, lineDivider } = props;

  let experiences = experience.map(exp => <li>{exp}</li>);
  let reqs = requirements.map(req => <li>{req}</li>);
  let includedServices = includes.map(inc => <li>{inc}</li>);

  return (
    <div className='chef-bio'>
      <div className='chef-bio--about'>
        <h2>About the Chef</h2>
        <p>{about}</p>
      </div>
      {lineDivider}
      <div className='chef-bio--experience'>
        <h2>Experience</h2>
        <ul>
          {experiences}
        </ul>
      </div>
      {lineDivider}
      <div className='chef-bio--booking-req'>
        <h2>Booking Requirements</h2>
        <ul>
          {reqs}
        </ul>
      </div>
      {lineDivider}
      <div className='chef-bio--includes'>
        <h2>Meal Includes</h2>
        <ul>
          {includedServices}
        </ul>
      </div>
      {lineDivider}
    </div>  
  )
}

export default ChefBio;