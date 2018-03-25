import counterValue from "./counterValue";

export default backend => {
  return counterValue(backend).then(value => {
    const newValue = value + 1;
    return backend.setValue("counter", newValue);
  });
};
