import React from 'react';
import './Bar-left.scss';
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
  
  let lineDivider = <div className='line-divider'></div>;
  {/* reusable line break, passed to other components for consistency/reusability */}

  return (
    <div className='bar-left'>
      <ImageGal />
      <ChefInfo 
      name={name} 
      accolades={accolades} 
      location={location}
      />
      {lineDivider}
      <ChefBio 
      about={about}
      experience={experience}
      requirements={requirements}
      includes={includes}
      lineDivider={lineDivider}
      />
      <Reviews reviews={reviews} lineDivider={lineDivider}/>
    </div>
  );
};

export default BarLeft;