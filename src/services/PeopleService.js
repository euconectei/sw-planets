import Request from "../configs/request";
import { BASE_URL } from "../configs/constants";

// const PEOPLE_URL = id => `${BASE_URL}/peoples/${id}`;
const PEOPLES_URL = `${BASE_URL}/peoples`;

// TODO: tratar erros

const PeopleService = {
  findAll: () => Request.get(PEOPLES_URL),
  findList: list => Promise.all(list.map(async item => {
    const people = await Request.get(item);
    return people.name;
  })),
  findOne: url => Request.get(url),
};

export default PeopleService;