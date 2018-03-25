export default gists => {
  return new Promise(resolve => {
    gists.create(
      {
        public: false,
        description: "backend-git",
        files: {
          description: {
            content: "POC - Gist as a backend"
          }
        }
      },
      (err, res) => {
        console.log("GIST created", res);
        resolve(res);
      }
    );
  });
};
