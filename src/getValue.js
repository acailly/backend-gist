import getBackendGist from "./getBackendGist";

export default gists => key => {
  return getBackendGist(gists).then(gist => {
    return gist.files[key] ? gist.files[key].content : undefined;
  });
};
