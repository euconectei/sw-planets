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
  display: grid;
  grid-template-columns: 30px auto;
  grid-column-gap: 5px;
  padding: 5px;
  margin: 5px;

  &:hover {
    background-color: #B70000;
    color: #FFF;
  }
`;

const IconStyled = styled.div`
  height: 20px;
  margin-right: 10px;
  text-align: center;
  width: 30px;
`;

const DataStyled = styled.div`
  text-align: left;
`;

const CardData = ({ icon, title, value }) => (
  <GroupStyled>
    <IconStyled>
      <FontAwesomeIcon icon={icon} title={title} />
    </IconStyled>
    <DataStyled>
      {value}
    </DataStyled>
  </GroupStyled>
);

CardData.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CardData;