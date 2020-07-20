import React from 'react';
import './Reviews.scss';
import star from '../../assets/star.png';

const Reviews = (props) => {
  let { reviews, lineDivider } = props;
  const reviewAverage = (reviews.reduce((acc, review) =>{
    acc += review.rating;
    return acc;
  }, 0)) / reviews.length;
  
  let starCount = (num) => {
    let stars = [];
    for (let i = 0; i < num ; i++) {
      stars.push(<img className='star-rating' src={star} alt='star'/>)
    }
    return stars

  }
  

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
          {starCount}
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