import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewdata from './reviewDate';
import styled from 'styled-components';

const Review = () => {
  const reviewList =() => {
    console.log(reviewdata)
  }
  return (
    <div>
      <h2>여행후기 베스트</h2>
      <ReviewBest>
        <button onClick={reviewList}>버튼</button>
        {
        reviewdata.map(function(review){
          return(
            <div key={review.id}>
              <img src={review.img} alt="" />
              <p>{review.title}</p>
              <span>{review.content}</span>
            </div>
          )
        })
        }
      </ReviewBest>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const ReviewBest = styled(Slider)`
.slick-next,
.slick-prev {
  width: 30px;
  height: 30px;
  margin-left : 30px;
  margin-right : 50px;
  z-index: 99999;
  top: 45%;
}
.slick-next::before,
.slick-prev::before {
font-size: 50px;
color: red;
}
`;

export default Review;