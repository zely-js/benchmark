const zely = require('@zely-js/zely');
const autocannon = require('autocannon');

function start() {
  return new Promise((resolve, reject) => {
    zely
      .zely({
        port: 3003,
        globalImport: true,
      })
      .then((server) => {
        // zely doesn't support production mode yet in 3.0.0-alpha.8

        process.env.NODE_ENV = 'development';

        server.listen(3003, async () => {
          await fetch('http://localhost:3003/');
          const result = await autocannon({
            url: 'http://localhost:3003',
            workers: 4,
          });

          const output = autocannon.printResult(result);

          console.log(output);

          resolve();
        });
      });
  });
}

module.exports = start;
