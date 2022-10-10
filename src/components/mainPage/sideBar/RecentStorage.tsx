import styled from 'styled-components';

export const RecentStorage = () => {
  return (
    <RecentContainer>
      <p>최근 본 상품</p>
      <p>(2)</p>
      <Storage>{}</Storage>
    </RecentContainer>
  );
};

const RecentContainer = styled.div`
  width: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`;

const Storage = styled.div`
  background-color: #000;
`;
