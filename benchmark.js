const express = require('./benchmark.express');
const zely = require('./benchmark.zely');

console.log('\nExpress Server\n');

express().then(() => {
  console.log('\nZely Server\n');
  zely().then(() => process.exit(0));
});
