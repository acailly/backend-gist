import getBackendGistId from "./getBackendGistId";

export default gists => (key, value) => {
  return getBackendGistId(gists).then(id => {
    return new Promise(resolve => {
      gists.edit(
        {
          id,
          files: {
            [key]: {
              content: JSON.stringify(value)
            }
          }
        },
        (err, res) => resolve(res)
      );
    });
  });
};
