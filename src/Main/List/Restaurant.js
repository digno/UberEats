import React from 'react';
import styled from 'styled-components';
import { minWidth } from '../../assets';

const Info = styled.div`
  padding: 10px 0;
  margin-top: -5px;
  transition: all 0.3s ease-in-out;
`;

const Restaurant = styled.a`
  margin-bottom: 10px;
  display: block;

  ${minWidth.md`
    margin-bottom: 36px;
  `};

  :hover {
    ${Info} {
      background-color: rgba(117, 117, 117, 0.04);
    }
  }
`;

const Picture = styled.img`
  width: 100%;
`;

const Name = styled.div`
  line-height: 24px;
  color: #1d1d1d;
  font-size: 16px;
`;

const Assortment = styled.div`
  line-height: 21px;
  font-size: 14px;
  color: #626262;
`;

const Time = styled.div`
  line-height: 21px;
  color: #1d1d1d;
`;

export default props => {
  const { pic, name, assortment, time } = props.restaurant;

  return (
    <Restaurant href="#">
      <Picture src={pic} />
      <Info>
        <Name>{name}</Name>
        <Assortment>{assortment}</Assortment>
        <Time>{time}</Time>
      </Info>
    </Restaurant>
  );
};
