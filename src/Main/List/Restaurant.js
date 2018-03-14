import React from 'react';
import styled from 'styled-components';

const Restaurant = styled.div`
  margin-bottom: 12px;
`;

const Picture = styled.img`
  width: 100%;
`;

const Info = styled.div``;

const Name = styled.div`
  line-height: 24px;
  font-size: 16px;
`;

const Assortment = styled.div`
  line-height: 21px;
  font-size: 14px;
  color: #626262;
`;

const Time = styled.div`
  line-height: 21px;
`;

export default props => {
  const { pic, name, assortment, time } = props.restaurant;

  return (
    <Restaurant>
      <Picture src={pic} />
      <Info>
        <Name>{name}</Name>
        <Assortment>{assortment}</Assortment>
        <Time>{time}</Time>
      </Info>
    </Restaurant>
  );
};
