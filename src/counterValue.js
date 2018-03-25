export default backend => {
  return backend.getValue("counter").then(value => {
    return value ? Number(value) : 0;
  });
};
