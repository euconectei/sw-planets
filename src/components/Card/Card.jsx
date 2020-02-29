import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardData from './CardData';

const CardStyled = styled.div`
  align-self: center;
  border: 2px solid #E7250A;
  color: #B70000;
  font-family: 'Nova Flat', Helvetica, Arial, sans-serif;
  justify-self: center;
  width: 400px;
  `;

const TitleStyled = styled.div`
  color: #B70000;
  font-size: 24px;
  padding: 10px;
  margin: 5px;
  text-align: center;
`;

const Card = ({ planet }) => (
  <CardStyled>
    <TitleStyled>{(planet.name).toUpperCase()}</TitleStyled>
    <CardData icon="undo" title="Rotation Period" value={(+(planet.rotation_period)).toLocaleString() || 'Unknown'} />
    <CardData icon="sync" title="Orbital Period" value={(+(planet.orbital_period)).toLocaleString() || 'Unknown'} />
    <CardData icon="arrows-alt-h" title="Diameter" value={(+(planet.diameter)).toLocaleString() || 'Unknown'} />
    <CardData icon="cloud-sun-rain" title="Climate" value={planet.climate} />
    <CardData icon="smile" title="Gravity" value={planet.gravity} />
    <CardData icon="tree" title="Terrain" value={planet.terrain} />
    <CardData icon="water" title="Surface Water" value={planet.surface_water} />
    <CardData icon="smile" title="Population" value={(+(planet.population)).toLocaleString() || 'Unknown'} />
    <CardData icon="male" title="Residents" value={planet.residents} />
    <CardData icon="film" title="Films" value={planet.films} />
  </CardStyled>
);

Card.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.number,
    orbital_period: PropTypes.number,
    diameter: PropTypes.number,
    climate: PropTypes.string,
    gravity: PropTypes.number,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.number,
    residents: PropTypes.arrayOf(PropTypes.string),
    films: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Card;