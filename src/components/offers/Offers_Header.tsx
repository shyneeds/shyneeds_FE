import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getOfferData } from './Offers_Type';

export default function Offers_Header() {
  const [datas, setDatas] = useState<getOfferData>();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://13.125.151.45:8080/api/package/admin/2',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEwMEBnbWFpbC5jb20iLCJhdXRoIjoiQURNSU4iLCJleHAiOjE4MjMxNTg5MTF9.XHWNGrugeIW1gYvVme_lDfcRQ6g0qriLqOfMTi592RY',
      },
    }).then((res) => setDatas(res.data.data));
  }, []);

  console.log(datas);

  return (
    <>
      <ProductWrap>
        <Product_Img></Product_Img>
        <Product_Option></Product_Option>
      </ProductWrap>
      <OfferWrap>
        <Offer_Img src={datas?.descriptionImage[0]}></Offer_Img>
      </OfferWrap>
    </>
  );
}

const ProductWrap = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  background: blue;
`;

const Product_Img = styled.img`
  position: absolute;
  width: 30%;
  background: orange;
`;
const Product_Option = styled.div`
  position: absolute;
  width: 30%;
  right: 0;
  height: 300px;

  background: black;
`;
const OfferWrap = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Offer_Img = styled.img`
  width: 60%;
`;
