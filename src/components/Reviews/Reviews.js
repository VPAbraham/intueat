import React from 'react';
import './Reviews.scss';
import star from '../../assets/star.png';

const Reviews = (props) => {
  let { reviews, lineDivider } = props;
  const reviewAverage = (reviews.reduce((acc, review) =>{
    acc += review.rating;
    return acc;
  }, 0)) / reviews.length; 

  return (
    <div className='chef-reviews'>
      <div className='reviews-header'>
        <h2>Ratings & Reviews</h2>
        <div className='reviews-stats'>
          <img className='star-img' alt='star-symbol' src={star}/>
          <h3>{reviewAverage}</h3>
          <p>{reviews.length} Reviews</p>
        </div>
        {lineDivider}
       <section>
        {reviews.map(review =>
        <div className='review-container'>
          <p>{review.rating}</p>
          <h3>{review.name}</h3>
          <p>{review.review}</p>
          {lineDivider}
        </div>)}
       </section>
      </div>
    </div>
  )
}

export default Reviews;