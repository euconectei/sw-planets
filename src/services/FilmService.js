import Request from "../configs/request";
import { BASE_URL } from "../configs/constants";

// const FILM_URL = id => `${BASE_URL}/films/${id}`;
const FILMS_URL = `${BASE_URL}/films`;

// TODO: tratar erros

const FilmService = {
  findAll: () => Request.get(FILMS_URL),
  findList: list => {
    if (list.length === 0) {
      return ["Unknown"];
    }

    return Promise.all(list.map(async item => {
      const film = await Request.get(item);
      return film.title;
    }));
  },
  findOne: url => Request.get(url),
};

export default FilmService;