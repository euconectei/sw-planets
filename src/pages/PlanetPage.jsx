import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PlanetService from '../services/PlanetService';
import { Loading, Button, Card, CardFlip } from '../components';

import numbers from '../utils/numbers';
import FilmService from '../services/FilmService';
import PeopleService from '../services/PeopleService';

const PlanetPage = () => {
  const [planet, setPlanet] = useState({
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: "",
    residentsName: [],
    filmsTitle: [],
  });
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await PlanetService.findOne(id);
      data.filmsTitle = await FilmService.findList(data.films);
      data.residentsName = await PeopleService.findList(data.residents);
      setPlanet(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const nextPlanet = () => {
    setLoading(true);
    history.push(`/planets/${numbers.random(61, 1)}`);
  };
  const backHome = () => {
    setLoading(true);
    history.push(`/`);
  };
  const BackBtn = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;

    background-color: transparent;
    border: 2px solid #666;
    border-radius: 5px;
    display: inline-block;
    margin: 10px 0;
    padding: 5px;
    text-align: center;
    align-self: center;

    color: #666;
    font-family: 'Nova Flat', Helvetica, Arial, sans-serif;
    font-size: 16px;
    outline: none;
  `;

  return (
    <>
      <BackBtn onClick={() => backHome()}>◀ Home</BackBtn>
      <CardFlip
        flipped={loading}
        back={
          <Loading />
        }
        front={
          <>
            <Card planet={planet} />
            <Button callback={() => nextPlanet()} value='Next ▸' />
          </>
        }
      />

    </>
  );
};

export default PlanetPage;