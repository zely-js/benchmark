const zely = require('zely');
const autocannon = require('autocannon');

function start() {
  return new Promise((resolve, reject) => {
    zely
      .Zely({
        port: 3002,
        prebuild: true,
      })
      .then((server) => {
        server.listen(3002, async () => {
          const result = await autocannon({
            url: 'http://localhost:3002',
          });

          const output = autocannon.printResult(result);

          console.log(output);

          resolve();
        });
      });
  });
}

module.exports = start;
