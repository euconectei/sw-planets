import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardData from './CardData';
import { Loading } from '../';
import numbers from '../../utils/numbers';
import FilmService from '../../services/FilmService';
import PeopleService from '../../services/PeopleService';

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

const Card = ({ planet }) => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataFilms = await FilmService.findList(planet.films);
      setFilms(dataFilms);
      const dataResidents = await PeopleService.findList(planet.residents);
      setResidents(dataResidents);
      setLoading(false);
    };
    fetchData();
  }, [planet.residents, planet.films])

  if (loading) return <Loading />;
  return (
    <CardStyled>
      <TitleStyled>{(planet.name).toUpperCase()}</TitleStyled>
      <CardData icon="undo" title="Rotation Period" value={numbers.format(planet.rotation_period)} />
      <CardData icon="sync" title="Orbital Period" value={numbers.format(planet.orbital_period)} />
      <CardData icon="arrows-alt-h" title="Diameter" value={numbers.format(planet.diameter)} />
      <CardData icon="cloud-sun-rain" title="Climate" value={planet.climate} />
      <CardData icon="smile" title="Gravity" value={planet.gravity} />
      <CardData icon="tree" title="Terrain" value={planet.terrain} />
      <CardData icon="water" title="Surface Water" value={planet.surface_water} />
      <CardData icon="smile" title="Population" value={numbers.format(planet.population)} />
      <CardData icon="male" title="Residents" value={residents.join(', ')} />
      <CardData icon="film" title="Films" value={films.join(', ')} />
    </CardStyled>
  )
};

// TODO: Inserir ícone para gravidade
// TODO: Listar filmes
// TODO: Listar residentes

Card.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    residents: PropTypes.arrayOf(PropTypes.string),
    films: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Card;