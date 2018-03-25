import Gists from "gists";
import getValue from "./getValue";
import setValue from "./setValue";

export default (login, password) => {
  const gists = new Gists({
    username: login,
    password: password
  });

  return {
    setValue: setValue(gists),
    getValue: getValue(gists)
  };
};
