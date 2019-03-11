const express = require('express');
const path = require('path');

const route = express.Router();

route.get('/index',(req,res)=>{
    // res.render('index');
    res.sendFile(path.join(__dirname,'..','public','index.html'));
});



module.exports = route;