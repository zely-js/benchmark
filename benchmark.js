const express = require('./benchmark.express');
const zely3 = require('./benchmark.zely4');

console.log('\nExpress Server\n');

express().then(() => {
  console.log('\nZely2 Server\n');
  zely3().then(() => process.exit(0));
});
