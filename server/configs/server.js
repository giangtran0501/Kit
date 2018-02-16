const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser')
const routers = require('../routers');
const errorHandler = require('../middlewares/errorHandler');

// Create express server
const app = express();

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
console.log(path.join(__dirname, '../uploads'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routers);
app.use(errorHandler);

module.exports = http.Server(app);