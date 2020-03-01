import React from 'react';
import styled from 'styled-components';

import * as loadingPlanet from '../../assets/images/loading-planet.png';

const LoadingStyled = styled.div`
  align-self: center;
  justify-self: center;
`;

const ImgStyled = styled.img`
  height: 128px;
  width: 128px;
`;

const TextStyled = styled.div`
  color: #B70000;
  font-family: 'Nova Flat', Helvetica, Arial, sans-serif;
`;

const Loading = () => (
  <LoadingStyled>
    <ImgStyled src={loadingPlanet} alt="Loading..." />
    <TextStyled>
      Loading...
    </TextStyled>
  </LoadingStyled>
);

export default Loading;
