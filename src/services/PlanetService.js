import Request from "../configs/request";
import { BASE_URL } from "../configs/constants";

const PLANET_URL = id => `${BASE_URL}/planets/${id}`;
const PLANETS_URL = `${BASE_URL}/planets`;

const PlanetService = {
  findOne: async id => await Request.get(PLANET_URL(id)),
  findAll: async () => await Request.get(PLANETS_URL),
};

export default PlanetService;