import React from 'react';
import styled from 'styled-components';

function Modal({ onClose }: any) {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Overlay>
      <ModalWrap>
        <ModalHeader>
          <p>옵션 추가하기</p>
          <CloseButton onClick={handleClose}>취소</CloseButton>
          <SaveButton>저장</SaveButton>
        </ModalHeader>
        <ModalMain>
          <ProductWrap>
            <OptionTextWrap>
              <OptionName>옵션명</OptionName>
              <OptionValue>옵션 값(엔터를 입력해서 구분해주세요)</OptionValue>
            </OptionTextWrap>
            <ProductName placeholder="옵션명을 입력해주세요."></ProductName>
            <ProductOption
              placeholder="옵션 값을 입력해주세요."
              onKeyUp={(e) => {
                if (e.keyCode == 13) {
                  alert('11');
                }
              }}
            ></ProductOption>
          </ProductWrap>
        </ModalMain>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 800px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalHeader = styled.section`
  display: flex;
  align-items: center;
  postion: relative;
  width: 800px;
  height: 80px;

  background: #ffffff;
  border-bottom: 1px solid #cccccc;
  p {
    position: absolute;
    left: 30px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  width: 80px;
  height: 40px;
  right: 130px;
  background: #cccccc;
  border-radius: 8px;
  cursor: pointer;
`;
const SaveButton = styled.button`
  position: absolute;
  width: 80px;
  height: 40px;
  right: 30px;
  background: #4286f4;
  border-radius: 8px;
  cursor: pointer;
`;
const ModalMain = styled.section`
  width: 100%;
  height: fit-content;
  background: #ffffff;
  border-bottom: 1px solid #cccccc;
`;
const ProductWrap = styled.section`
  padding: 20px;
`;
const OptionTextWrap = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
`;
const OptionName = styled.p`
  width: 30%;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;
const OptionValue = styled.p`
  width: 70%;
  left: 100px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;
const ProductName = styled.input`
  width: 30%;
  height: 45px;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;
const ProductOption = styled.input`
  width: 70%;
  height: 45px;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;

export default Modal;
