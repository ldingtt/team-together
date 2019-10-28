'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const path = require('path');
// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/html/homepage.png'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
