import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PlanetService from '../services/PlanetService';
import { Loading, Button, Card } from '../components';

import numbers from '../utils/numbers';
import FilmService from '../services/FilmService';
import PeopleService from '../services/PeopleService';


const PlanetPage = () => {
  const [planet, setPlanet] = useState({});
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

  if (loading) return <Loading />;

  return (
    <>
      <Card planet={planet} />
      <Button callback={() => nextPlanet()} value="Next" />
    </>
  );
};

export default PlanetPage;