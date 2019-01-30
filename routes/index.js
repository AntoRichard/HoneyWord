const express = require('express');

const route = express.Router();

route.get('/index',(req,res)=>{
    res.render('index');
});



module.exports = route;