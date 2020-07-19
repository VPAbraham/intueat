import React from 'react';
import ChefInfo from '../Chef-info/Chef-info';
import ChefBio from '../Chef-bio/Chef-bio';

const BarLeft = (props) => {
  let {name, 
    accolades, 
    location, 
    about, 
    experience, 
    requirements, 
    includes} = props;
    
  return (
    <div className='bar-left'>
      <ChefInfo 
      name={name} 
      accolades={accolades} 
      location={location}
      />
      <ChefBio 
      about={about}
      experience={experience}
      requirements={requirements}
      includes={includes}
      />
    </div>
  );
};

export default BarLeft;