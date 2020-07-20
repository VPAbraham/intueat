import React from 'react';
import './Bar-right.scss';
import starLogo from '../../assets/star.png';

const BarRight = (props) => {
  let { reviews } = props;

  const reviewAverage = (reviews.reduce((acc, review) =>{
    acc += review.rating;
    return acc;
  }, 0)) / reviews.length;

  return (
    <div className='bar-right'>
      <div>
        <h4>$000</h4>
        <p>per person</p>
        <div>
          <img src={starLogo}/>
          <p>{reviewAverage}</p>
        </div>
      </div>
    </div>
  );
};

export default BarRight;