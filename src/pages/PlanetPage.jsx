import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PlanetService from '../services/PlanetService';
import { CardData, Loading, Button, Card } from '../components';

import numbers from '../utils/numbers';



const PlanetPage = () => {
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
      <Card planet={planet} />
      <Button to={`/planets/${numbers.random(61, 1)}`} value="Next" />
    </>
  );
};

// TODO: Inserir ícone para gravidade
// TODO: Listar filmes
// TODO: Listar residentes

export default PlanetPage;