import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PlanetService from '../services/PlanetService';
import { Loading } from '../components';
import numbers from '../utils/numbers';
import CardData from '../components/CardData';

const PlanetStyled = styled.div`
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

const Planet = () => {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await PlanetService.findOne(id)
      setPlanet(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <>
      <PlanetStyled>
        <TitleStyled>{(planet.name).toUpperCase()}</TitleStyled>
        <CardData icon="undo" title="Rotation Period" value={(parseInt(planet.rotation_period)).toLocaleString()} />
        <CardData icon="sync" title="Orbital Period" value={(parseInt(planet.orbital_period)).toLocaleString()} />
        <CardData icon="arrows-alt-h" title="Diameter" value={(parseInt(planet.diameter)).toLocaleString()} />
        <CardData icon="cloud-sun-rain" title="Climate" value={planet.climate} />
        <CardData icon="smile" title="Gravity" value={planet.gravity} />
        <CardData icon="tree" title="Terrain" value={planet.terrain} />
        <CardData icon="water" title="Surface Water" value={planet.surface_water} />
        <CardData icon="smile" title="Population" value={(parseInt(planet.population)).toLocaleString()} />
        <CardData icon="male" title="Residents" value={planet.residents} />
        <CardData icon="film" title="Films" value={planet.films} />
      </PlanetStyled>
      <Link to={`/planets/${numbers.random(61, 1)}`}>Next</Link>
    </>
  );
};

export default Planet;