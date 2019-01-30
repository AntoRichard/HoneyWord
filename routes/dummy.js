const express = require('express');

const route = express.Router();


route.get('/dummy',(req,res)=>{
    res.render('dummy');
});


route.post('/dummy',(err,res)=>{
    res.redirect('/dummy');
});


module.exports = route;