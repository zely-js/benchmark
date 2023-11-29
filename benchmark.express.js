const express = require('express');
const autocannon = require('autocannon');

function main() {
  return new Promise((resolve, reject) => {
    const app = express();

    app.get('/', function (req, res) {
      require('./pages/index').get(req, res);
    });

    app.listen(3001, async () => {
      const result = await autocannon({
        url: 'http://localhost:3001',
      });

      const output = autocannon.printResult(result);

      console.log(output);

      resolve();
    });
  });
}

module.exports = main;
