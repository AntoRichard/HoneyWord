const express  =require('express');

const  route = express.Router();

route.get('/adminMap',(req,res)=>{
    res.render('adminMap');
});

module.exports = route;