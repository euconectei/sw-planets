import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Home = () => (
  <>
    <div>Página Inicial</div>
    <Link to="/planets/1">Planet</Link>
    <Link to="/planets">Planets</Link>
  </>
);

export default Home;