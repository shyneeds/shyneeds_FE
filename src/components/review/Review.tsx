import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { API_URL } from '../../constants/API_URL';
import axios from 'axios';
import { getReviewData, reviewData } from '../../features/main/reviewSlice';
import { ResponseType } from '../../utils/ResponseType';
import { Link } from 'react-router-dom';

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

const Review = () => {
  const dispatch = useAppDispatch();
  const review = useAppSelector(reviewData);
  const getBestReviewData: any = async () => {
    try {
      const res = await axios.post<ResponseType>(API_URL.POST.MAIN, {
        categoryList: [],
      });
      const mainData = res.data.data;
      const reviewData = mainData.bestReviewList;
      dispatch(getReviewData(reviewData));
      return reviewData;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBestReviewData();
  }, []);

  return (
    <ReviewWrap>
      <h2>여행후기 베스트</h2>
      <ReviewBest {...settings}>
        {review.map((review: any) => (
          <Link to={'community/'} key={review.id}>
            <ReviewCont>
              <img src={review.mainImage} alt="review_image" />
              <div>
                <p>{review.title}</p>
                <pre>{review.contents}</pre>
                <ReviewDate>
                  <p>{review.updatedAt}</p>
                  <p>{review.author}</p>
                </ReviewDate>
              </div>
            </ReviewCont>
          </Link>
        ))}
      </ReviewBest>
    </ReviewWrap>
  );
};

const ReviewWrap = styled.div`
  width: 1184px;
  margin: 56px auto;
  padding: 8px;

  > h2 {
    margin: 0 0 20px;
    font-size: 1.5rem;
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
