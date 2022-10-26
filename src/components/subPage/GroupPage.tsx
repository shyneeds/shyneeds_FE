import React from 'react';
import styled from 'styled-components';
import { FiArrowUpRight } from "react-icons/fi";

function GroupPage() {
  return (
    <Container>
      <Content_Wrap>
        <Main>
          <img src={process.env.PUBLIC_URL + '/images/1-sub-banner.png'} alt=''></img>
          <Content_Box>
            <Summary>
              <p className='title'>
                모험가들의 로망 <br />
                세상에서 가장 아름다운 <br />
                우유니 소금 사막 <br />
              </p>
              <p className='keyword'>
                5070 함께 <br />
                중남미 여행 <br />
              </p>
              <Detail>자세히 보기</Detail>
              <All>모든 5070끼리 여행 보기
                <FiArrowUpRight />
              </All>
            </Summary>
            <Thumbnail>
              <Space src={process.env.PUBLIC_URL + '/images/card-1-1.png'} alt=''></Space>
              <img src={process.env.PUBLIC_URL + '/images/card-1-2.png'} alt=''></img>
            </Thumbnail>
          </Content_Box>
        </Main>
        <Main>
          <img src={process.env.PUBLIC_URL + '/images/2-sub-banner.png'} alt=''></img>
          <Content_Box>
            <Summary>
              <p className='title'>
                형형색색 <br />
                다채로운 색의 도시 <br />
                웅장하고 조화로운 건축 <br />
              </p>
              <p className='keyword'>
                2040 <br />
                라자스탄 궁전 호텔 <br />
              </p>
              <Detail>자세히 보기</Detail>
              <All>모든 2040끼리 여행 보기
                <FiArrowUpRight />
              </All>
            </Summary>
            <Thumbnail>
              <Space src={process.env.PUBLIC_URL + '/images/card-2-1.png'} alt=''></Space>
              <img src={process.env.PUBLIC_URL + '/images/card-2-2.png'} alt=''></img>
            </Thumbnail>
          </Content_Box>
        </Main>
        <Main>
          <img src={process.env.PUBLIC_URL + '/images/3-sub-banner.png'} alt=''></img>
          <Content_Box>
            <Summary>
              <p className='title'>
                광활한 사막부터 <br />
                빙하까지 <br />
                안전하고 자유로운 <br />
              </p>
              <p className='keyword'>
                여성만 함께하는 <br />
                파타고니아 여행 <br />
              </p>
              <Detail>자세히 보기</Detail>
              <All>모든 여성끼리 여행 보기
                <FiArrowUpRight />
              </All>
            </Summary>
            <Thumbnail>
              <Space src={process.env.PUBLIC_URL + '/images/card-3-1.png'} alt=''></Space>
              <img src={process.env.PUBLIC_URL + '/images/card-3-2.png'} alt=''></img>
            </Thumbnail>
          </Content_Box>
        </Main>
        <Main>
          <img src={process.env.PUBLIC_URL + '/images/4-sub-banner.png'} alt=''></img>
          <Content_Box>
            <Summary>
              <p className='title'>
                스릴 가득한 <br />
                골퍼들의 천국 <br />
              </p>
              <p className='keyword'>
                남자들만 떠나는 <br />
                치앙마이 <br />
                골프 리조트 <br />
              </p>
              <Detail>자세히 보기</Detail>
              <All>모든 남성끼리 여행 보기
                <FiArrowUpRight />
              </All>
            </Summary>
            <Thumbnail>
              <Space src={process.env.PUBLIC_URL + '/images/card-4-1.png'} alt=''></Space>
              <img src={process.env.PUBLIC_URL + '/images/card-4-2.png'} alt=''></img>
            </Thumbnail>
          </Content_Box>
        </Main>
        <Main>
          <img src={process.env.PUBLIC_URL + '/images/5-sub-banner.png'} alt=''></img>
          <Content_Box>
            <Summary>
              <p className='title'>
                다른 바람 <br />
                다른 자연의 요정의 길 <br />
                안데르센의 유년의 도시 <br />
              </p>
              <p className='keyword'>
                자녀 동반 <br />
                북유럽 덴노스핀 15일 <br />
              </p>
              <Detail>자세히 보기</Detail>
              <All>모든 자녀 동반 여행 보기
                <FiArrowUpRight />
              </All>
            </Summary>
            <Thumbnail>
              <Space src={process.env.PUBLIC_URL + '/images/card-5-1.png'} alt=''></Space>
              <img src={process.env.PUBLIC_URL + '/images/card-5-2.png'} alt=''></img>
            </Thumbnail>
          </Content_Box>
        </Main>
        <Main>
          <img src={process.env.PUBLIC_URL + '/images/6-sub-banner.png'} alt=''></img>
          <Content_Box>
            <Summary>
              <p className='title'> 
                북 아프리카의 보석 <br />
                광대한 사하라 사막 <br />
                다채로운 유산 <br />
              </p>
              <p className='keyword'>
                잠든 감성을 깨우는 <br />
                누구나 함께 모로코 <br />
              </p>
              <Detail>자세히 보기</Detail>
              <All>모든 누구든지 여행 보기
                <FiArrowUpRight />
              </All>
            </Summary>
            <Thumbnail>
              <Space src={process.env.PUBLIC_URL + '/images/card-6-1.png'} alt=''></Space>
              <img src={process.env.PUBLIC_URL + '/images/card-6-2.png'} alt=''></img>
            </Thumbnail>
          </Content_Box>
        </Main>
      </Content_Wrap>
    </Container>
  )
}

export default GroupPage;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Content_Wrap = styled.section`
  
`;

const Main = styled.article`
  width: 100%;
  margin: 8px 0;
  position: relative;
`;

const Content_Box = styled.div`
  width: 1184px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;

const Summary = styled.div`
  width: 600px;
  height: 512px;
  font-size: 46px;
  color: #fff;
  line-height: 1.6;
`;

const Detail = styled.button`
  width: 124px;
  height: 48px;
  background-color: #4286f4;
  border-radius: 40px;
  color: #fff;
  margin-right: 16px;
  font-size: 16px;
  font-weight: 600;
`;

const All = styled.button`
  width: 230px;
  height: 48px;
  background-color: #fff;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
`;

const Thumbnail = styled.div`
  width: 496px;
  height: 340px;
  display: flex;
  margin-left: 88px;
  margin-top: 32px;
`;

const Space = styled.img`
  margin-right: 16px;
`;

