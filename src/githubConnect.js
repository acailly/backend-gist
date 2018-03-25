import GitHub from "github-api";

export default (login, password) =>
  new GitHub({
    username: login,
    password: password
  });
