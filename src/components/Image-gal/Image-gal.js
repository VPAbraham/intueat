import React from 'react';
import './Image-gal.scss';
import ImageGallery from 'react-image-gallery';
import chef1 from '../../assets/head-chef.jpeg';
import chef2 from '../../assets/chef-2.jpg';
import chef3 from '../../assets/chef-3.jpg';
import arrow from '../../assets/arrow.png';



const images = [chef1, chef2, chef3];

const ImageGal = () => {
  return (
    <div className='image-gal'>
      <img className='arw left-arw' src={arrow} alt='directional arrow' />
      <img className='chef-portrait' src={chef1}/>
      <img className='arw right-arw' src={arrow} alt='directional arrow' />
      {/* arrows control TBA photo scrolling functionality */}
    </div>
  )
}

export default ImageGal;