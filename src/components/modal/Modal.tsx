import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { productOption } from '../../features/adminPage/adminPageSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

interface InputItem {
  id: number;
  optionValue: string;
  price: string;
}

function Modal({ onClose }: any) {
  const inputId = useRef<number>(1);
  const [title, setTitle] = useState<string>('');
  const [optionFlg, setOptionFlg] = useState<boolean>(false);
  const [inputItems, setInputItems] = useState<InputItem[]>([
    {
      id: 0,
      optionValue: '',
      price: '',
    },
  ]);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    onClose?.();
  };
  const addInput = () => {
    if (inputId.current < 7) {
      const input = {
        id: inputId.current,
        optionValue: '',
        price: '',
      };
      setInputItems([...inputItems, input]);
      inputId.current += 1;
    }
  };

  return (
    <Overlay>
      <ModalWrap>
        <ModalHeader>
          <p>옵션 추가하기(최대 7개)</p>
          <CloseButton onClick={handleClose}>취소</CloseButton>
          <SaveButton
            onClick={() => {
              inputItems.map((item) => {
                const option = {
                  title: title,
                  optionValue: item.optionValue,
                  price: item.price,
                  optionFlg: optionFlg,
                };
                dispatch(productOption(option));
                handleClose();
              });
            }}
          >
            저장
          </SaveButton>
        </ModalHeader>
        <ModalMain>
          <ProductWrap>
            <OptionTextWrap>
              <OptionName>옵션명</OptionName>
              <OptionValue>옵션 값(엔터를 입력해서 구분해주세요)</OptionValue>
              <OptionPrice>가격</OptionPrice>
              <OptionFlag
                onClick={() => setOptionFlg(!optionFlg)}
                type="checkbox"
              />
              <OptionFlagText>필수</OptionFlagText>
            </OptionTextWrap>
            <ProductName
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="옵션명을 입력해주세요."
            ></ProductName>
            <ProductAddWrap>
              <ProductOptionWrap>
                {inputItems.map((item) => (
                  <ProductOption
                    key={item.id}
                    placeholder="옵션 값을 입력해주세요."
                    onKeyUp={(e) => {
                      if (e.keyCode == 13) {
                        addInput();
                      }
                    }}
                    onChange={(e) => {
                      item.optionValue = e.target.value;
                    }}
                  ></ProductOption>
                ))}
              </ProductOptionWrap>
              <ProductPriceWrap>
                {inputItems.map((item) => (
                  <ProductPrice
                    key={item.id}
                    placeholder="가격"
                    onChange={(e) => {
                      item.price = e.target.value;
                    }}
                    onKeyUp={(e) => {
                      if (e.keyCode == 13) {
                        addInput();
                      }
                    }}
                  ></ProductPrice>
                ))}
              </ProductPriceWrap>
              <ProductCancelWrap>
                {inputItems.map((item) => (
                  <ProductCancel
                    key={item.id}
                    onClick={() => {
                      if (inputItems.length > 1)
                        setInputItems(
                          inputItems.filter((items) => items.id !== item.id)
                        );
                    }}
                  >
                    X
                  </ProductCancel>
                ))}
              </ProductCancelWrap>
            </ProductAddWrap>
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
  width: 1000px;
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
  width: 100%;
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
  height: auto;
  background: #ffffff;
`;
const ProductWrap = styled.section`
  position: relative;
  padding: 20px;
`;
const OptionTextWrap = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
`;
const OptionName = styled.p`
  width: 20%;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;
const OptionValue = styled.p`
  position: absolute;
  width: 40%;
  left: 230px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;
const OptionPrice = styled.p`
  position: absolute;
  width: 20%;
  left: 650px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;
const OptionFlag = styled.input`
  position: absolute;
  right: 45px;
`;
const OptionFlagText = styled.p`
  position: absolute;
  right: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;
const ProductName = styled.input`
  width: 20%;
  height: 45px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  margin-right: 10px;
`;
const ProductAddWrap = styled.section`
  display: flex;
  width: 60%;
  height: 400px;
`;
const ProductOptionWrap = styled.section`
  position: absolute;
  top: 50px;
  left: 230px;
  width: 40%;
  height: 300px;
`;
const ProductOption = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;
const ProductPriceWrap = styled.section`
  position: absolute;
  width: 20%;
  top: 50px;
  left: 650px;
  height: 300px;
`;
const ProductPrice = styled.input`
  height: 45px;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;
const ProductCancelWrap = styled.section`
  position: absolute;
  width: 20px;
  top: 50px;
  right: 170px;
`;
const ProductCancel = styled.button`
  height: 45px;
  cursor: pointer;
`;

export default Modal;
