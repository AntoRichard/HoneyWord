const express = require('express');
const dummyUtils = require('../utils/dummy');
const route = express.Router();


route.get('/dummy',dummyUtils.getDummy);


route.post('/dummy',dummyUtils.postDummy);


module.exports = route;