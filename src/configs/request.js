import axios from 'axios';

const Request = {
  get: async (url) => {
    const response = await axios.get(url);
    console.log({ response });
    return response.data;
  },
}

export default Request;