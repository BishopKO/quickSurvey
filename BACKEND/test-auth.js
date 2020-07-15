const crypto = require('crypto');
const express = require('express');
const fs = require('fs');

const file = fs.readFileSync('./test-auth.js', 'utf-8');
fs.writeFileSync('test.js', 'jajco');
console.log(file);
const server = express();

server.get('/auth', (req, res) => {
  console.log(req);
});
//
// server.listen('127.0.0.1', 666, () => {
//   console.log('listen on 666!');
// });


const result = crypto.createHmac('sha256', 'password1').digest('hex');
console.log(result);
