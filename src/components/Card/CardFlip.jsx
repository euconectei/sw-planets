import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardFlipContainerStyled = styled.div`
  position: relative;
  transform: ${props => (props.flipped) ? 'rotateY(180deg)' : null};
  transform-style: preserve-3d;
  transition: transform 0.8s;
  height: 100%;
  width: 100%;
`;

const CardFlipStyled = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  perspective: 1000px;

  align-items: center;
  justify-content: center;
  justify-self: center;
  
  width: 400px;
  @media (max-width: 424px) {
    width: 100%;
  }
`;

const CardFlipFrontStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;

  opacity: ${props => (!props.flipped) ? 1 : 0};
  transition: all 0.8s;
`;

const CardFlipBackStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  display: flex;
  flex-direction: column;
  justify-content: center;

  opacity: ${props => (props.flipped) ? 1 : 0};
  transition: all 0.8s;
`;

const CardFlip = ({ front, back, flipped }) => (
  <CardFlipStyled>
    <CardFlipContainerStyled flipped={flipped}>
      <CardFlipFrontStyled flipped={flipped}>
        {front}
      </CardFlipFrontStyled>
      <CardFlipBackStyled flipped={flipped}>
        {back}
      </CardFlipBackStyled>
    </CardFlipContainerStyled>
  </CardFlipStyled>
);

CardFlip.propTypes = {
  back: PropTypes.node.isRequired,
  flipped: PropTypes.bool.isRequired,
  front: PropTypes.node.isRequired,
};

export default CardFlip;