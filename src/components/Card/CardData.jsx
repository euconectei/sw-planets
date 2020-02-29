import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudSunRain,
  faArrowsAltH,
  faFilm,
  faTree,
  faWater,
  faSmile,
  faSync,
  faUndo,
  faMale,
} from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(
  faCloudSunRain,
  faArrowsAltH,
  faFilm,
  faTree,
  faWater,
  faSmile,
  faSync,
  faUndo,
  faMale,
);

const GroupStyled = styled.div`
  border: 2px solid #E7250A;
  padding: 10px;
  margin: 5px;

  &:hover {
    background-color: #B70000;
    color: #FFF;
  }
`;

const IconStyled = styled.span`
  display: inline-block;
  height: 20px;
  margin-right: 10px;
  text-align: center;
  width: 20px;
`;

const CardData = ({ icon, title, value }) => (
  <GroupStyled>
    <IconStyled>
      <FontAwesomeIcon icon={icon} title={title} />
    </IconStyled>
    {value}
  </GroupStyled>
);

CardData.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CardData;