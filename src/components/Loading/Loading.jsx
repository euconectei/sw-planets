import React from 'react';

import * as loadingPlanet from '../../assets/images/loading-planet.png';
import styled from 'styled-components';

const TextStyled = styled.div`
  align-self: center;
  color: #B70000;
  font-family: 'Nova Flat', Helvetica, Arial, sans-serif;
  justify-self: center;
`;

const Loading = () => (
  <>
    <img src={loadingPlanet} alt="Loading..." />
    <TextStyled>
      Loading...
    </TextStyled>
  </>
);

export default Loading;
