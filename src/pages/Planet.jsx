import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PlanetService from '../services/PlanetService';
import { Loading } from '../components';
import numbers from '../utils/numbers';

const PlanetStyled = styled.div`
  align-self: center;
  border: 1px solid red;
  justify-self: center;
`;

const TitleStyled = styled.div``;
const DataStyled = styled.div``;

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
        {
          Object.keys(planet).map(function (key, i) {
            if (key === 'name') return (<TitleStyled key={i}>{(planet.name).toUpperCase()}</TitleStyled>)
            return (<DataStyled key={i}>{key.toUpperCase()}: {planet[key]}</DataStyled>)

            // TODO: Criar lista de filmes
            // TODO: Criar lista de habitantes
            // TODO: Tratar dia/hora

          })
        }
      </PlanetStyled>
      <Link to={`/planets/${numbers.random(61, 1)}`}>Next</Link>
    </>
  );
};

export default Planet;