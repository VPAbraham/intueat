import React from 'react';
import ImageGal from '../Image-gal/Image-gal';
import ChefInfo from '../Chef-info/Chef-info';
import ChefBio from '../Chef-bio/Chef-bio';
import Reviews from '../Reviews/Reviews';

const BarLeft = (props) => {
  let {name, 
    accolades, 
    location, 
    about, 
    experience, 
    requirements, 
    includes,
    reviews
    } = props;

  return (
    <div className='bar-left'>
      <ImageGal />
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
      <Reviews reviews={reviews}/>
    </div>
  );
};

export default BarLeft;