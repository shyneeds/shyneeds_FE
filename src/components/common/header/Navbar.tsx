import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LAYOUT } from '../../../constants/layout';
import { useState } from 'react';

export const Navbar = () => {
  const [groupOpen, setGroupOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Nav>
          <TopUl>
            <TopLi
              onMouseEnter={() => {
                setGroupOpen(!groupOpen);
              }}
              onMouseLeave={() => {
                setGroupOpen(!groupOpen);
              }}
            >
              <Link to="/subPage">그룹별 여행</Link>
              {groupOpen && (
                <SubWrapper>
                  <SubNav>
                    <SubUl_first>
                      <SubLi_first>
                        <Link to="/subPage_group">5070끼리</Link>
                      </SubLi_first>
                      <SubLi_first>
                        <Link to="/subPage_group">2040끼리</Link>
                      </SubLi_first>
                      <SubLi_first>
                        <Link to="/subPage_group">남자끼리</Link>
                      </SubLi_first>
                      <SubLi_first>
                        <Link to="/subPage_group">여자끼리</Link>
                      </SubLi_first>
                      <SubLi_first>
                        <Link to="/subPage_group">자녀동반</Link>
                      </SubLi_first>
                      <SubLi_first>
                        <Link to="/subPage_group">누구든지</Link>
                      </SubLi_first>
                    </SubUl_first>
                  </SubNav>
                </SubWrapper>
              )}
            </TopLi>
            <TopLi
              onMouseEnter={() => {
                setRegionOpen(!regionOpen);
              }}
              onMouseLeave={() => {
                setRegionOpen(!regionOpen);
              }}
            >
              <Link to="/subPage_region">지역별 여행</Link>
              {regionOpen && (
                <SubWrapper>
                  <SubNav_second>
                    <SubUl_first>
                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_region">동남아/태평양</Link>
                        </SubLi_first>
                        <SubUl_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>동남아시아</p>
                            </Link>
                          </SubLi_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>괌&사이판&하와이</p>
                            </Link>
                          </SubLi_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>호주&뉴질랜드</p>
                            </Link>
                          </SubLi_second>
                        </SubUl_second>
                      </SubBox>
                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_region">인도/중앙아시아</Link>
                        </SubLi_first>
                        <SubUl_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>인도&주변국</p>
                            </Link>
                          </SubLi_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>중앙아시아</p>
                            </Link>
                          </SubLi_second>
                        </SubUl_second>
                      </SubBox>

                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_region">아프리카/중동</Link>
                        </SubLi_first>
                        <SubUl_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>동남아프리카</p>
                            </Link>
                          </SubLi_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>북아프리카&중동</p>
                            </Link>
                          </SubLi_second>
                        </SubUl_second>
                      </SubBox>

                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_region">유럽/코카서스</Link>
                        </SubLi_first>
                        <SubUl_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>코카서스</p>
                            </Link>
                          </SubLi_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>유럽</p>
                            </Link>
                          </SubLi_second>
                        </SubUl_second>
                      </SubBox>

                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_region">중남미/북미</Link>
                        </SubLi_first>
                        <SubUl_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>중남미</p>
                            </Link>
                          </SubLi_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>북미</p>
                            </Link>
                          </SubLi_second>
                        </SubUl_second>
                      </SubBox>

                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_region">대만/중국/일본</Link>
                        </SubLi_first>
                        <SubUl_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>대만</p>
                            </Link>
                          </SubLi_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>중국</p>
                            </Link>
                          </SubLi_second>
                          <SubLi_second>
                            <Link to="/subPage_region">
                              <p>일본</p>
                            </Link>
                          </SubLi_second>
                        </SubUl_second>
                      </SubBox>
                    </SubUl_first>
                  </SubNav_second>
                </SubWrapper>
              )}
            </TopLi>
            <TopLi
              onMouseEnter={() => {
                setThemeOpen(!themeOpen);
              }}
              onMouseLeave={() => {
                setThemeOpen(!themeOpen);
              }}
            >
              <Link to="/subPage_theme">테마별 여행</Link>
              {themeOpen && (
                <SubWrapper_theme>
                  <SubNav_second>
                    <SubUl_first_theme>
                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_theme">문화탐방</Link>
                        </SubLi_first>
                      </SubBox>

                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_theme">골프여행</Link>
                        </SubLi_first>

                        <SubBox_second>
                          <SubUl_second>
                            <SubLi_second>
                              <Link to="/subPage_theme">
                                <p>유럽/미국/특수지역</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <Link to="/subPage_theme">
                                <p>태국/라오스/미얀마</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <Link to="/subPage_theme">
                                <p>필리핀/인도네시아</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <Link to="/subPage_theme">
                                <p>베트남/캄보디아</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <Link to="/subPage_theme">
                                <p>싱가폴/기타동남아</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <Link to="/subPage_theme">
                                <p>중국/일본/대만</p>
                              </Link>
                            </SubLi_second>
                          </SubUl_second>
                        </SubBox_second>
                      </SubBox>
                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_theme">휴양지</Link>
                        </SubLi_first>
                      </SubBox>

                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_theme">트레킹</Link>
                        </SubLi_first>
                      </SubBox>

                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_theme">성지순례</Link>
                        </SubLi_first>
                      </SubBox>

                      <SubBox>
                        <SubLi_first>
                          <Link to="/subPage_theme">볼론투어</Link>
                        </SubLi_first>
                      </SubBox>
                    </SubUl_first_theme>
                  </SubNav_second>
                </SubWrapper_theme>
              )}
            </TopLi>
            <TopLi
              onMouseEnter={() => {
                setProjectOpen(!projectOpen);
              }}
              onMouseLeave={() => {
                setProjectOpen(!projectOpen);
              }}
            >
              <Link to="/subPage">기획전 여행</Link>
              {projectOpen && (
                <SubWrapper>
                  <SubNav>
                    <SubUl_first></SubUl_first>
                  </SubNav>
                </SubWrapper>
              )}
            </TopLi>
            <TopLi
              onMouseEnter={() => {
                setCommunityOpen(!communityOpen);
              }}
              onMouseLeave={() => {
                setCommunityOpen(!communityOpen);
              }}
            >
              <Link to="/community">커뮤니티</Link>
              {communityOpen && (
                <SubWrapper>
                  <SubNav>
                    <SubUl_first>
                      <SubLi_first>
                        <Link to="/community">여행후기</Link>
                      </SubLi_first>
                      <SubLi_first>
                        <Link to="/community">게시판</Link>
                      </SubLi_first>
                    </SubUl_first>
                  </SubNav>
                </SubWrapper>
              )}
            </TopLi>
          </TopUl>
        </Nav>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  height: 56px;
  border-bottom: 0.7px solid #ddd;
`;

const Nav = styled.nav`
  height: 100%;
  max-width: ${LAYOUT.SIZE.WIDTH};
  margin: 0 auto;
`;

const TopUl = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 5rem;
`;

const TopLi = styled.li`
  color: #222222;

  &:hover {
    padding-bottom: 1.25rem;
    margin-top: 1.25rem;
    color: #4286f4;
  }
`;

const SubWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 56px;
  left: 0;
  border-bottom: 0.7px solid #ddd;
  background-color: #fff;
  z-index: 999;
`;

const SubWrapper_theme = styled(SubWrapper)`
  height: 316px;
`;

const SubNav = styled.nav`
  max-width: ${LAYOUT.SIZE.WIDTH};
  height: 64px;
  margin: 0 auto;
`;

const SubNav_second = styled.div`
  max-width: ${LAYOUT.SIZE.WIDTH};
  margin: 0 auto;
`;

const SubBox = styled.div`
  max-width: 107px;
`;

const SubBox_second = styled.div`
  margin: 0 0 0 -8px;
`;

const SubUl_first = styled.ul`
  height: 100%;
  display: flex;
  padding: 20px 0;
  gap: 7rem;
`;

const SubUl_first_theme = styled(SubUl_first)`
  /* gap: 4rem; */
`;

const SubUl_second = styled.ul`
  padding: 4px 0 4px 0;
`;

const SubLi_first = styled.li`
  font-weight: 600;
  color: #222222;

  &:hover a {
    border-bottom: 2px solid #000000;
    font-weight: bolder;
    padding-bottom: 4px;
    color: #000000;
    width: 50%;
  }
`;

const SubLi_second = styled.li`
  display: flex;
  min-height: 20px;
  font-size: 14px;
  color: #666666;
  padding: 0 0 4px 5px;
  margin-top: 16px;

  &:hover p {
    color: #000000;
    font-weight: bolder;
    border-bottom: 1px solid #000000;
  }

  a {
    position: relative;
  }

  a:before {
    content: '';
    display: block;
    position: absolute;
    top: 7px;
    left: -8px;
    width: 4px;
    height: 4px;
    margin: -1px 5px 0 0;
    background-color: #cccccc;
    border-radius: 50%;
    vertical-align: middle;
  }
  &:hover a:before {
    // background-color: #000;
  }
`;
