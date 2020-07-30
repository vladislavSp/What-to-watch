export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatingTime = (sec) => {
  return new Date(sec * 1000).toISOString().substr(11, 8);
};
