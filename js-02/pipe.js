const pipe = (fns) => {
  if(fns.length <= 0) return 0;
  const initial = fns.shift();
  const additional = fns;
  let result = initial();
  for (let i = 0; i < additional.length; i++) {
    result = additional[i](result);
  }
  return result;
};

module.exports = {
  pipe
}