import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardData from './CardData';
import numbers from '../../utils/numbers';

const CardStyled = styled.div`
  align-self: center;
  border: 2px solid #E7250A;
  color: #BFAA87;
  font-family: 'Nova Flat', Helvetica, Arial, sans-serif;
  justify-self: center;
  margin: 50px 10px 5px;
  position: relative;
`;

const TitleStyled = styled.div`
  color: #B70000;
  font-size: 24px;
  padding: 10px;
  margin: 5px;
  text-align: center;
`;

// TODO: Inserir ícone para gravidade

const Card = ({ planet }) => (
  <CardStyled>
    <TitleStyled>{(planet.name).toUpperCase()}</TitleStyled>
    {/* <CardData icon="undo" title="Rotation Period" value={numbers.format(planet.rotation_period)} /> */}
    {/* <CardData icon="sync" title="Orbital Period" value={numbers.format(planet.orbital_period)} /> */}
    {/* <CardData icon="arrows-alt-h" title="Diameter" value={numbers.format(planet.diameter)} /> */}
    <CardData icon="cloud-sun-rain" title="Climate" value={planet.climate} />
    {/* <CardData icon="long-arrow-alt-down" title="Gravity" value={planet.gravity} /> */}
    <CardData icon="tree" title="Terrain" value={planet.terrain} />
    {/* <CardData icon="water" title="Surface Water" value={planet.surface_water} /> */}
    <CardData icon="male" title="Population" value={numbers.format(planet.population)} />
    {/* <CardData icon="portrait" title="Residents" value={planet.residentsName.join(', ')} /> */}
    <CardData icon="film" title="Films" value={planet.filmsTitle.join(', ')} />
  </CardStyled>
);

Card.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // rotation_period: PropTypes.string,
    // orbital_period: PropTypes.string,
    // diameter: PropTypes.string,
    climate: PropTypes.string,
    // gravity: PropTypes.string,
    terrain: PropTypes.string,
    // surface_water: PropTypes.string,
    population: PropTypes.string,
    // residentsName: PropTypes.arrayOf(PropTypes.string),
    filmsTitle: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Card;