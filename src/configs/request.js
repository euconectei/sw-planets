import axios from 'axios';

const Request = {
  get: async (url) => {
    const response = await axios.get(url);
    return response.data;
  },
}

export default Request;