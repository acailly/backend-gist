import { find, propEq } from "ramda";
import createBackendGist from "./createBackendGist";

export default gists => {
  return new Promise(resolve => {
    gists.list({ user: gists.options.username }, (err, res) => {
      console.log("Gist founds:", res);
      let gist = find(propEq("description", "backend-git"), res);
      if (!gist) {
        console.log("No gist found, creating a new one");
        gist = createBackendGist(gists);
      } else {
        console.log("Returning existing gist");
        gist = Promise.resolve(gist);
      }

      gist.then(({ id }) => {
        gists.download({ id }, (err, res) => {
          resolve(res);
        });
      });
    });
  });
};
