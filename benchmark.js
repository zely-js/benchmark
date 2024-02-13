const express = require('./benchmark.express');
const zely2 = require('./benchmark.zely2');
const zely3 = require('./benchmark.zely3');

console.log('\nExpress Server\n');

express().then(() => {
  console.log('\nZely2 Server\n');
  zely2().then(() => {
    console.log('\nZely3 Server\n');
    zely3().then(() => process.exit(0));
  });
});
