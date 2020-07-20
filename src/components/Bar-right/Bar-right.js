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
      <div className='cost-info'>
        <div>
          <h4 className='dollar-cost'>$000</h4>
          <p className='per-person'>per person</p>
        </div>
        <div>
          <img src={starLogo}/>
          <p className='score-num'>{reviewAverage}</p>
        </div>
      </div>
    </div>
  );
};

export default BarRight;