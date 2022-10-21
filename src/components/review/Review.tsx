import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reviewdata from './reviewDate';
import styled from 'styled-components';

const Review = () => {
  const reviewList = () => {
    console.log(reviewdata);
  };
  return (
    <ReviewWrap>
      <h2>여행후기 베스트</h2>
      <ReviewBest {...settings}>
        {reviewdata.map(function (review) {
          return (
            <ReviewCont key={review.id}>
              <img src={review.img} alt="" />
              <div>
                <p>{review.title}</p>
                <span>{review.content}</span>
                <ReviewDate>
                  <p>{review.date}</p>
                  <p>{review.writer}</p>
                </ReviewDate>
              </div>
            </ReviewCont>
          );
        })}
      </ReviewBest>
    </ReviewWrap>
  );
};

const ReviewWrap = styled.div`
  width: 1184px;
  height: 608px;
  margin: 80px auto;
  > h2 {
    margin: 0 0 20px;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: -1px;
  }
  .slick-slider {
    margin: 0 -10px;
  }
  .slick-slide {
    padding: 0 7px;
  }
`;
const ReviewCont = styled.div`
  border-radius: 10px;
  border: 1px solid #cccccc;
  overflow: hidden;
  > div {
    padding: 22px;
  }
  > div > p {
    margin: 0 0 16px;
    font-size: 1.18rem;
    font-weight: bold;
  }
  > div > span {
    color: #666666;
    font-size: 1rem;
    line-height: 22px;
  }
`;
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const ReviewBest = styled(Slider)`
  .slick-next,
  .slick-prev {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    z-index: 2;
    top: 52%;
  }
  .slick-next::before,
  .slick-prev::before {
    font-size: 0;
  }
  .slick-prev {
    background: url('/icons/ic-chevron-left-40x40-050.svg') no-repeat;
  }
  .slick-next {
    background: url('/icons/ic-chevron-right-40x40-050.svg') no-repeat;
  }
`;
const ReviewDate = styled.div`
  margin: 20px 0 0;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  > p {
    float: left;
    margin: 0 10px 0 0;
    color: #666666;
    font-size: 0.925rem;
  }
`;
export default Review;
