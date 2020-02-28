import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PlanetService from '../services/PlanetService';
import { Loading } from '../components';

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
            if (key === 'name') return (<TitleStyled>{(planet.name).toUpperCase()}</TitleStyled>)
            return (<DataStyled>{key.toUpperCase()}: {planet[key]}</DataStyled>)

          })
        }
      </PlanetStyled>
      <Link to={`/planets/${Math.floor(Math.random() * (60 - 1) + 1)}`}>Next</Link>
    </>
  );
};

export default Planet;