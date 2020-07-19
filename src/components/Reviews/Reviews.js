import React from 'react';
import './Reviews.scss';
import star from '../../assets/star.png';

const Reviews = (props) => {
  let { reviews } = props;
  const reviewAverage = (reviews.reduce((acc, review) =>{
    acc += review.rating;
    return acc;
  }, 0)) / reviews.length; 

  let reviewList = reviews.map(review =>
    <div className='review-container'>
      <p>{review.rating}</p>
      <h3>{review.name}</h3>
      <p>{review.review}</p>
    </div>
  )

  return (
    <div className='chef-reviews'>
      <div className='chef-reviews--header'>
        <h2>Ratings & Reviews</h2>
        <div>
          <img alt='star-symbol' src={star}/>
          <h3>{reviewAverage}</h3>
          <p>{reviews.length} Reviews</p>
        </div>
       <section>
        {reviewList}
       </section>
      </div>
    </div>
  )
}

export default Reviews;