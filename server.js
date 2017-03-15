const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'web')));

const server = app.listen(9999, function () { console.log('Running server on 9999 port.'); });
