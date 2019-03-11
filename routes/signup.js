const express = require('express');

const signupUtils = require('../utils/signup');

const route = express.Router();

route.get('/signup',signupUtils.getSignup);

route.post('/signup', signupUtils.postSignup);

module.exports = route;