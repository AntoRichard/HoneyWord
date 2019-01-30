const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const indexRoute = require('./routes/index');
const dummyRoute = require('./routes/dummy');

mongoose.connect('mongodb://localhost/honeyword');
// middleware
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.use(signupRoute);
app.use(loginRoute);
app.use(indexRoute);
app.use(dummyRoute);

app.listen(PORT, () => {
    console.log(`Server running in PORT : ${PORT}`);
});