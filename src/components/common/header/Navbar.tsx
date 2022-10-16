import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LAYOUT } from '../../../constants/layout';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const GroupToggle = () => {
    setIsOpen(!isOpen);
    setGroupOpen(!groupOpen);
  };
  const RegionToggle = () => {
    setIsOpen(!isOpen);
    setRegionOpen(!regionOpen);
  };
  const ThemeToggle = () => {
    setIsOpen(!isOpen);
    setThemeOpen(!themeOpen);
  };
  return (
    <Container>
      <Wrapper>
        <Nav>
          <Ul>
            <Li onMouseEnter={GroupToggle} onMouseLeave={GroupToggle}>
              <Link to="">
                그룹별 여행
                {groupOpen && (
                  <SubWrapper>
                    <SubNav>
                      <SubUl>
                        <SubLi>
                          <Link to="">5070끼리</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">2040끼리</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">남자끼리</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">여자끼리</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">자녀동반</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">누구든지</Link>
                        </SubLi>
                      </SubUl>
                    </SubNav>
                  </SubWrapper>
                )}
              </Link>
            </Li>
            <Li onMouseEnter={RegionToggle} onMouseLeave={RegionToggle}>
              <Link to="">
                지역별 여행
                {regionOpen && (
                  <SubWrapper>
                    <SubNav>
                      <SubUl>
                        <SubLi>
                          <Link to="">동남아/태평양</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">인도/중앙아시아</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">아프리카/중동</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">유럽/코카서스</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">중남미/북미</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">대만/중국/일본</Link>
                        </SubLi>
                      </SubUl>
                    </SubNav>
                  </SubWrapper>
                )}
              </Link>
            </Li>
            <Li onMouseEnter={ThemeToggle} onMouseLeave={ThemeToggle}>
              <Link to="">
                테마별 여행
                {themeOpen && (
                  <SubWrapper>
                    <SubNav>
                      <SubUl>
                        <SubLi>
                          <Link to="">문화탐방</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">골프여행</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">휴양지</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">트레킹</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">성지순례</Link>
                        </SubLi>
                        <SubLi>
                          <Link to="">볼론투어</Link>
                        </SubLi>
                      </SubUl>
                    </SubNav>
                  </SubWrapper>
                )}
              </Link>
            </Li>
            <Li>
              <Link to="">커뮤니티</Link>
            </Li>
          </Ul>
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

const Ul = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 5rem;
`;

const Li = styled.li`
  color: #222222;

  &:hover {
    border-bottom: 2px solid #4286f4;
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

const SubNav = styled.nav`
  max-width: ${LAYOUT.SIZE.WIDTH};
  height: 64px;
  margin: 0 auto;
`;

const SubUl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const SubLi = styled.li`
  color: #222222;

  &:hover {
    border-bottom: 2px solid #4286f4;
    padding-bottom: 1.45rem;
    margin-top: 1.45rem;
    color: #4286f4;
  }
`;
