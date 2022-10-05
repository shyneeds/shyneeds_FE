import React from 'react';
import styled from 'styled-components';

const Writing = () => {
  return (
    <div>
      <h2>내가 작성한 글</h2>
      <ContentsResultBox>내가 작성한 글이 없습니다.</ContentsResultBox>
    </div>
  );
};
const ContentsResultBox = styled.div`
  padding: 100px;
  text-align: center;
`;

export default Writing;
