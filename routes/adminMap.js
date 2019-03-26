const express = require('express');

const route = express.Router();

route.get('/adminMap', (req, res) => {
    res.render('adminMap', {
        lat : 12.8698817,
        lng : 80.2162332
    });
});

module.exports = route;