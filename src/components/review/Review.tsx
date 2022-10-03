import React from 'react';
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
                        <li key={review.id}>
                            <img src={review.img} alt="" />
                            <p>{review.title}</p>
                            <span>{review.content}</span>
                        </li>
                    )
                })
                }
            </ReviewBest>
        </div>
    );
};

const ReviewBest = styled.div`
  
`;


export default Review;