const express = require('express');

const loginUtils = require('../utils/login');

const route = express.Router();

route.get('/login', loginUtils.getLogin);



route.post('/login', loginUtils.postLogin);

module.exports = route;