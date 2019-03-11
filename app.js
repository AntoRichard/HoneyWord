const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const indexRoute = require('./routes/index');
const dummyRoute = require('./routes/dummy');
const adminMap = require('./routes/adminMap');

mongoose.connect('mongodb://localhost/honeyword');
// middleware
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.use(signupRoute);
app.use(loginRoute);
app.use(indexRoute);
app.use(dummyRoute);
app.use(adminMap);

app.listen(PORT, () => {
    console.log(`Server running in PORT : ${PORT}`);
});