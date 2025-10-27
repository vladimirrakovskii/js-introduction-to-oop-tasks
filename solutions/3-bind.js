// BEGIN
const bind = (obj, fn) => {
  return (...args) => {
    return fn.apply(obj, args);
  };
};

export default bind;
// END
