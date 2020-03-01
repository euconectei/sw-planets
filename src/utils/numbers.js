const numbers = {
  random: (min, max) => Math.floor(Math.random() * (max - min) + min),
  format: (value) => (+value) ? (+value).toLocaleString() : 'Unknown',
};

export default numbers;