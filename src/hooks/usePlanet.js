import { useState, useCallback } from "react";

const usePlanet = () => {
  const [planet, setPlanet] = useState({
    name: "teste",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: "",
    residents: [],
    films: [],
    created: "",
    edited: "",
    url: ""
  });

  const updatePlanet = (data) =>
    setPlanet(prev => ({
      ...prev,
      ...data
    }));

  const resetPlanet = useCallback(() => {
    setPlanet(prev => ({
      ...prev,
      name: "teste",
      rotation_period: "",
      orbital_period: "",
      diameter: "",
      climate: "",
      gravity: "",
      terrain: "",
      surface_water: "",
      population: "",
      residents: [],
      films: [],
      created: "",
      edited: "",
      url: ""
    }))
  });

  return [planet, resetPlanet, updatePlanet];
};

export default usePlanet;