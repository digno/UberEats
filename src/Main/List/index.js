import React from 'react';
import styled from 'styled-components';

import list from './restaurantsList';
import Restaurant from './Restaurant';

const List = styled.div``;

export default () => {
  const restaurants = list.map(restaurant => {
    return (
      <div className="col-xs-12 col-md-6 col-lg-4">
        <Restaurant restaurant={restaurant} />
      </div>
    );
  });

  return (
    <List>
      <div className="row">{restaurants}</div>
    </List>
  );
};
