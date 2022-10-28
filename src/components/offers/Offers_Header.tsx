import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  getProductData,
  packageOptionResponseDtoType,
} from '../common/Product_Type';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  addProduct,
  setProductIds,
  setProductImage,
  setProductTitle,
  setTotalPrice,
  minusNum,
  plusNum,
  reservationProductNum,
  reservationInfo,
  reservationPayInfo,
  reservationPackageType,
} from '../../features/userReservation/userReservationSlice';
import { productId } from '../../features/main/productSlice';
import { useNavigate } from 'react-router';

type offerData = {
  relatedPackageList: getProductData[];
  travelPackageResponseDto: getProductData;
};

export default function Offers_Header() {
  const [datas, setDatas] = useState<offerData>();
  const [options, setOptions] = useState<reservationPackageType[]>([]);
  const [clicked, setClicked] = useState<boolean | null>(false);
  const emptyOption = useRef<reservationPackageType[]>([]);
  const optionsName = useRef<string[]>([]);
  const optionsPrice = useRef<number>(0);
  const isLoaded = useRef<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const productNum = useAppSelector(reservationProductNum);
  const id = localStorage.getItem('WATCHED_PRODUCTS');
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://13.125.151.45:8080/api/package/${id}`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjAwMDBAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxOTgxMzcwMTAyfQ.85ucBpU6BU7KbXYOOAl1-GdBYTn117SVu5rtTiUQPts',
      },
    }).then((res) => {
      setDatas(res.data.data);
      if (!isLoaded.current) {
        for (const [key] of Object.entries(
          res.data.data.travelPackageResponseDto.packageOptionResponseDto
        )) {
          optionsName.current.push(`${key}`);
        }
        isLoaded.current = !isLoaded.current;
      }
      dispatch(setProductIds(id));
    });
  }, []);

  useEffect(() => {
    optionsPrice.current = 0;
    options.map((option) => {
      optionsPrice.current += Number(option.price.replace(/,/g, ''));
    });
  }, [options]);

  useEffect(() => {
    emptyOption.current.push({
      optionFlg: null,
      optionValue: null,
      price: (
        (optionsPrice.current +
          Number(datas?.travelPackageResponseDto?.price.replace(/,/g, ''))) *
        productNum
      )
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
      quantity: productNum,
      optionTitle: null,
      travelPackageId: Number(id),
    });
  }, [productNum]);

  return (
    <>
      <ProductWrap>
        <Product_Img
          src={datas?.travelPackageResponseDto.mainImage}
        ></Product_Img>
        <InfoWrap>
          <Info>
            <Product_Share
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: datas?.travelPackageResponseDto.title,
                    text: datas?.travelPackageResponseDto.summary,
                    url: `http://localhost:3000/offers/${productId}`,
                  });
                } else {
                  alert('공유하기가 지원되지 않는 환경 입니다.');
                }
              }}
            >
              <img src={process.env.PUBLIC_URL + '/icons/share-icon.png'} />
            </Product_Share>
            <Product_Name>{datas?.travelPackageResponseDto.title}</Product_Name>
            <Product_Price>
              {datas?.travelPackageResponseDto?.price.replace(
                /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                ','
              )}
              원
            </Product_Price>
            <Product_Summary>
              {datas?.travelPackageResponseDto.summary}
            </Product_Summary>
            <Product_Option_Wrap>
              {optionsName.current.map((optionName, i) => (
                <Product_Option key={optionName}>
                  {datas?.travelPackageResponseDto.packageOptionResponseDto[
                    `${optionName}`
                  ][0].optionFlg
                    ? optionName.replaceAll("'", '') + '(필수)'
                    : optionName.replaceAll("'", '') + '(선택)'}
                  {optionsName.current.map((name: string, j) =>
                    i === j ? (
                      <Product_Option_Select
                        key={name}
                        onChange={(e) => {
                          for (
                            let i = 0;
                            i <
                            datas?.travelPackageResponseDto
                              .packageOptionResponseDto[`${name}`].length;
                            i++
                          ) {
                            if (
                              datas?.travelPackageResponseDto
                                .packageOptionResponseDto[`${name}`][i]
                                .optionValue === e.target.value &&
                              !options.find(
                                (option) =>
                                  option.optionValue === e.target.value
                              )
                            ) {
                              setOptions([
                                ...options,
                                {
                                  optionFlg:
                                    datas?.travelPackageResponseDto
                                      .packageOptionResponseDto[`${name}`][i]
                                      .optionFlg,
                                  optionValue: e.target.value.replaceAll(
                                    '[^a-zA-Z]',
                                    ''
                                  ),
                                  price: Number(
                                    datas?.travelPackageResponseDto
                                      .packageOptionResponseDto[`${name}`][i]
                                      .price
                                  )
                                    .toString()
                                    .replace(
                                      /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                      ','
                                    ),
                                  quantity: 0,
                                  optionTitle:
                                    datas?.travelPackageResponseDto.packageOptionResponseDto[
                                      `${name}`
                                    ][i].title.replaceAll("'", ''),
                                  travelPackageId:
                                    datas?.travelPackageResponseDto
                                      .packageOptionResponseDto[`${name}`][i]
                                      .id,
                                },
                              ]);
                            }
                          }
                        }}
                      >
                        {datas?.travelPackageResponseDto.packageOptionResponseDto[
                          `${name}`
                        ].map((option: packageOptionResponseDtoType) => (
                          <option key={option.id} value={option.optionValue}>
                            {option.optionValue.replaceAll('[^a-zA-Z]', '')}
                            {'       '}
                            {Number(option.price) === 0
                              ? null
                              : '(+' +
                                Number(option.price)
                                  .toString()
                                  .replace(
                                    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                    ','
                                  ) +
                                '원)'}
                          </option>
                        ))}
                      </Product_Option_Select>
                    ) : (
                      false
                    )
                  )}
                </Product_Option>
              ))}
            </Product_Option_Wrap>
            <PriceWrap>
              <Product_Num>
                <People_Option>
                  <People_Option_Title>
                    {options.map((option) => (
                      <p key={option.optionValue}>{option.optionValue}</p>
                    ))}
                  </People_Option_Title>
                  <People_Option_Btn>
                    {options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setOptions([
                            ...options.filter((opt) => opt !== option),
                          ]);
                        }}
                      >
                        x
                      </button>
                    ))}
                  </People_Option_Btn>
                </People_Option>
                <People_Num>
                  <Num_Minus
                    onClick={() => {
                      dispatch(minusNum());
                    }}
                  >
                    -
                  </Num_Minus>
                  <Num_Value>{productNum}</Num_Value>
                  <Num_Plus onClick={() => dispatch(plusNum())}>+</Num_Plus>
                </People_Num>
              </Product_Num>
              <PriceWrap_Line></PriceWrap_Line>
              <Product_Total_Price>
                <Price_Text>총 상품 금액</Price_Text>
                <Total_Price>
                  {(
                    (optionsPrice.current +
                      Number(
                        datas?.travelPackageResponseDto?.price.replace(/,/g, '')
                      )) *
                    productNum
                  )
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </Total_Price>
              </Product_Total_Price>
            </PriceWrap>
            <ButtonWrap>
              <Button_Reservation
                onClick={() => {
                  if (productNum > 0) {
                    datas ? dispatch(addProduct()) : '';
                    datas
                      ? dispatch(
                          setProductImage(
                            datas.travelPackageResponseDto.mainImage
                          )
                        )
                      : '';
                    datas
                      ? dispatch(
                          setProductTitle(datas.travelPackageResponseDto.title)
                        )
                      : '';
                    datas
                      ? dispatch(
                          setTotalPrice(
                            (
                              (optionsPrice.current +
                                Number(
                                  datas?.travelPackageResponseDto?.price.replace(
                                    /,/g,
                                    ''
                                  )
                                )) *
                              productNum
                            )
                              .toString()
                              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                          )
                        )
                      : '';
                    datas && options.length > 0
                      ? dispatch(reservationInfo(options))
                      : dispatch(reservationInfo(emptyOption.current));
                    navigate('/reservation');
                    datas ? dispatch(reservationPayInfo(-1)) : '';
                  } else {
                    alert('인원이 0명입니다.');
                  }
                }}
              >
                <p>예약하기</p>
              </Button_Reservation>
              <Button_Cart
                onClick={() => {
                  if (productNum > 0) {
                    datas ? dispatch(addProduct()) : '';
                    datas
                      ? dispatch(
                          setProductImage(
                            datas.travelPackageResponseDto.mainImage
                          )
                        )
                      : '';
                    datas
                      ? dispatch(
                          setProductTitle(datas.travelPackageResponseDto.title)
                        )
                      : '';
                    datas
                      ? dispatch(
                          setTotalPrice(
                            (
                              (optionsPrice.current +
                                Number(
                                  datas?.travelPackageResponseDto?.price.replace(
                                    /,/g,
                                    ''
                                  )
                                )) *
                              productNum
                            )
                              .toString()
                              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                          )
                        )
                      : '';
                    datas && options.length > 0
                      ? dispatch(reservationInfo(options))
                      : dispatch(reservationInfo(emptyOption.current));
                    navigate('/cart');
                  } else {
                    alert('인원이 0명입니다.');
                  }
                }}
              >
                <p>장바구니</p>
              </Button_Cart>
            </ButtonWrap>
          </Info>
        </InfoWrap>
      </ProductWrap>
      <OfferImgWrap className={clicked ? 'clicked' : 'unclicked'}>
        <Offer_Img
          src={datas?.travelPackageResponseDto.descriptionImage[0]}
        ></Offer_Img>
      </OfferImgWrap>
      <OfferBtnWrap>
        <Offer_Btn
          onClick={() => (clicked ? setClicked(false) : setClicked(true))}
        >
          상세정보 펼처보기
        </Offer_Btn>
      </OfferBtnWrap>
    </>
  );
}

const ProductWrap = styled.section`
  position: relative;
  width: 100%;
  height: 900px;
`;

const Product_Img = styled.img`
  width: 100%;
  heigth: 100%;
  object-fit: cover;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 50px;
  width: 30%;
  height: 80%;
  top: 50%;
  transform: translate(0, -50%);
  background: rgba(255, 255, 255, 0.77);
`;
const Info = styled.div`
  width: 80%;
  height: 80%;
`;
const Product_Share = styled.button`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
const Product_Name = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;
`;
const Product_Price = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 24px;
  margin-top: 20px;
`;
const Product_Summary = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 34px;
  width: 70%;
  margin-top: 20px;
`;
const Product_Option_Wrap = styled.section``;
const Product_Option = styled.section`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
`;
const Product_Option_Select = styled.select`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  height: 50px;
  color: #444;
  background: #f9f9f9;
  border: 1px solid #cccccc;
  padding: 0.3em 0.7em 0.2em 0.4em;
  margin-top: 10px;

  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #888;
  }
  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 2px rgba(59, 153, 252, 0.7);
    color: #222;
    outline: none;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
const PriceWrap = styled.section`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  background: #f9f9f9;
  border: 1px solid #cccccc;
`;
const Product_Num = styled.div`
  position: relative;
  height: 50%;
  display: flex;
  overflow-y: auto;
  align-items: center;
`;
const People_Option = styled.section`
  position: absolute;
  left: 20px;
  height: 100%;
`;
const People_Option_Title = styled.section`
  position: absolute;
  flex-direction: column;
  p {
    display: flex;
    align-items: center;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    height: 25px;
    width: 100px;
  }
`;
const People_Option_Btn = styled.section`
  position: absolute;
  left: 100px;
  flex-direction: column;
  button {
    display: flex;
    align-items: center;
    font-size: 15px;
    height: 25px;
    cursor: pointer;
  }
`;

const People_Num = styled.div`
  position: absolute;
  right: 20px;
  width: 90px;
  height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid #333333;
`;
const Num_Minus = styled.button`
  width: 30%;
  cursor: pointer;
`;
const Num_Plus = styled.button`
  width: 30%;
  cursor: pointer;
`;
const Num_Value = styled.p`
  width: 40%;
`;
const PriceWrap_Line = styled.div`
  height: 1px;
  background: #aaaaaa;
`;
const Product_Total_Price = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 50%;
`;
const Price_Text = styled.p`
  position: absolute;
  left: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
`;
const Total_Price = styled.p`
  position: absolute;
  right: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #4286f4;
`;
const ButtonWrap = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
`;
const Button_Reservation = styled.button`
  background: #4286f4;
  width: 120px;
  height: 40px;
  cursor: pointer;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: white;
  }
`;
const Button_Cart = styled.button`
  background: #4286f4;
  width: 120px;
  height: 40px;
  cursor: pointer;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: white;
  }
`;
const OfferImgWrap = styled.section`
  margin-top: 200px;
  display: flex;
  width: 100%;
  justify-content: center;
  &.unclicked {
    max-height: 500px;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  &.clicked {
    height: 100%;
    transition: max-height 0.3s ease-out;
  }
`;
const Offer_Img = styled.img`
  width: 50%;
`;
const OfferBtnWrap = styled.section`
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Offer_Btn = styled.button`
  background: #ffffff;

  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 420px;
  height: 56px;
  cursor: pointer;
`;
