import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LAYOUT } from '../../../constants/layout';
import { useState } from 'react';
import { BsDot } from 'react-icons/bs';

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
              <Link to="">
                그룹별 여행
                {groupOpen && (
                  <SubWrapper>
                    <SubNav>
                      <SubUl_first>
                        <SubLi_first>
                          <Link to="">5070끼리</Link>
                        </SubLi_first>
                        <SubLi_first>
                          <Link to="">2040끼리</Link>
                        </SubLi_first>
                        <SubLi_first>
                          <Link to="">남자끼리</Link>
                        </SubLi_first>
                        <SubLi_first>
                          <Link to="">여자끼리</Link>
                        </SubLi_first>
                        <SubLi_first>
                          <Link to="">자녀동반</Link>
                        </SubLi_first>
                        <SubLi_first>
                          <Link to="">누구든지</Link>
                        </SubLi_first>
                      </SubUl_first>
                    </SubNav>
                  </SubWrapper>
                )}
              </Link>
            </TopLi>
            <TopLi
              onMouseEnter={() => {
                setRegionOpen(!regionOpen);
              }}
              onMouseLeave={() => {
                setRegionOpen(!regionOpen);
              }}
            >
              <Link to="">
                지역별 여행
                {regionOpen && (
                  <SubWrapper>
                    <SubNav_second>
                      <SubUl_first>
                        <SubBox>
                          <SubLi_first>
                            <Link to="">동남아/태평양</Link>
                          </SubLi_first>
                          <SubUl_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>동남아시아</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>괌&사이판&하와이</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>호주&뉴질랜드</p>
                              </Link>
                            </SubLi_second>
                          </SubUl_second>
                        </SubBox>
                        <SubBox>
                          <SubLi_first>
                            <Link to="">인도/중앙아시아</Link>
                          </SubLi_first>
                          <SubUl_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>인도&주변국</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>중앙아시아</p>
                              </Link>
                            </SubLi_second>
                          </SubUl_second>
                        </SubBox>

                        <SubBox>
                          <SubLi_first>
                            <Link to="">아프리카/중동</Link>
                          </SubLi_first>
                          <SubUl_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>동남아프리카</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>북아프리카&중동</p>
                              </Link>
                            </SubLi_second>
                          </SubUl_second>
                        </SubBox>

                        <SubBox>
                          <SubLi_first>
                            <Link to="">유럽/코카서스</Link>
                          </SubLi_first>
                          <SubUl_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>코카서스</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>유럽</p>
                              </Link>
                            </SubLi_second>
                          </SubUl_second>
                        </SubBox>

                        <SubBox>
                          <SubLi_first>
                            <Link to="">중남미/북미</Link>
                          </SubLi_first>
                          <SubUl_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>중남미</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <BsDot className="dot_Icon" />
                              <Link to="">
                                <p>북미</p>
                              </Link>
                            </SubLi_second>
                          </SubUl_second>
                        </SubBox>

                        <SubBox>
                          <SubLi_first>
                            <Link to="">대만/중국/일본</Link>
                          </SubLi_first>
                          <SubUl_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>대만</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>중국</p>
                              </Link>
                            </SubLi_second>
                            <SubLi_second>
                              <BsDot className="dot_icon" />
                              <Link to="">
                                <p>일본</p>
                              </Link>
                            </SubLi_second>
                          </SubUl_second>
                        </SubBox>
                      </SubUl_first>
                    </SubNav_second>
                  </SubWrapper>
                )}
              </Link>
            </TopLi>
            <TopLi
              onMouseEnter={() => {
                setThemeOpen(!themeOpen);
              }}
              onMouseLeave={() => {
                setThemeOpen(!themeOpen);
              }}
            >
              <Link to="">
                테마별 여행
                {themeOpen && (
                  <SubWrapper_theme>
                    <SubNav_second>
                      <SubUl_first_theme>
                        <SubBox>
                          <SubLi_first>
                            <Link to="">문화탐방</Link>
                          </SubLi_first>
                        </SubBox>

                        <SubBox>
                          <SubLi_first>
                            <Link to="">
                              <p>골프여행</p>
                            </Link>
                          </SubLi_first>

                          <SubBox_second>
                            <SubUl_second>
                              <SubLi_second>
                                <BsDot className="dot_icon" />
                                <Link to="">
                                  <p>유럽/미국/특수지역</p>
                                </Link>
                              </SubLi_second>
                              <SubLi_second>
                                <BsDot className="dot_icon" />
                                <Link to="">
                                  <p>태국/라오스/미얀마</p>
                                </Link>
                              </SubLi_second>
                              <SubLi_second>
                                <BsDot className="dot_icon" />
                                <Link to="">
                                  <p>필리핀/인도네시아</p>
                                </Link>
                              </SubLi_second>
                              <SubLi_second>
                                <BsDot className="dot_icon" />
                                <Link to="">
                                  <p>베트남/캄보디아</p>
                                </Link>
                              </SubLi_second>
                              <SubLi_second>
                                <BsDot className="dot_icon" />
                                <Link to="">
                                  <p>싱가폴/기타동남아</p>
                                </Link>
                              </SubLi_second>
                              <SubLi_second>
                                <BsDot className="dot_icon" />
                                <Link to="">
                                  <p>중국/일본/대만</p>
                                </Link>
                              </SubLi_second>
                            </SubUl_second>
                          </SubBox_second>
                        </SubBox>

                        <SubBox>
                          <SubLi_first>
                            <Link to="">휴양지</Link>
                          </SubLi_first>
                        </SubBox>

                        <SubBox>
                          <SubLi_first>
                            <Link to="">트레킹</Link>
                          </SubLi_first>
                        </SubBox>

                        <SubBox>
                          <SubLi_first>
                            <Link to="">성지순례</Link>
                          </SubLi_first>
                        </SubBox>

                        <SubBox>
                          <SubLi_first>
                            <Link to="">볼론투어</Link>
                          </SubLi_first>
                        </SubBox>
                      </SubUl_first_theme>
                    </SubNav_second>
                  </SubWrapper_theme>
                )}
              </Link>
            </TopLi>
            <TopLi
              onMouseEnter={() => {
                setProjectOpen(!projectOpen);
              }}
              onMouseLeave={() => {
                setProjectOpen(!projectOpen);
              }}
            >
              <Link to="">
                기획전 여행
                {projectOpen && (
                  <SubWrapper>
                    <SubNav>
                      <SubUl_first></SubUl_first>
                    </SubNav>
                  </SubWrapper>
                )}
              </Link>
            </TopLi>
            <TopLi
              onMouseEnter={() => {
                setCommunityOpen(!communityOpen);
              }}
              onMouseLeave={() => {
                setCommunityOpen(!communityOpen);
              }}
            >
              <Link to="">
                커뮤니티
                {communityOpen && (
                  <SubWrapper>
                    <SubNav>
                      <SubUl_first>
                        <SubLi_first>
                          <Link to="">여행후기</Link>
                        </SubLi_first>
                        <SubLi_first>
                          <Link to="">게시판</Link>
                        </SubLi_first>
                      </SubUl_first>
                    </SubNav>
                  </SubWrapper>
                )}
              </Link>
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
  width: 450px;
`;

const SubBox_second = styled.div``;

const SubUl_first = styled.ul`
  height: 100%;
  display: flex;
  padding: 20px 0;
  gap: 7rem;
`;

const SubUl_first_theme = styled(SubUl_first)`
  gap: 4rem;
`;

const SubUl_second = styled.ul`
  padding: 4px 0 4px 0;
`;

const SubLi_first = styled.li`
  color: #222222;
  
  &::after {
    &:hover {
      border-bottom: 2px solid #000000;
      font-weight: bolder;
      padding-bottom: 0.2rem;
      color: #000000;
      width: 50%;
}
  }
`;

const SubLi_second = styled.li`
  display: flex;
  font-size: 14px;
  color: #666666;
  padding: 0 0 4px 0;
  margin-top: 16px;

  &:hover {
    color: #000000;
    font-weight: bolder;
    border-bottom: 1px solid #000000;
  }

  .dot_icon {
    color: #cccccc;
  }
`;
