const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String,
    password1 : String,
    password2 : String,
    password3 : String,
    password4 : String,
    password5 : String,
    password6 : String,
    password7 : String,
    password8 : String
});


const userModel = mongoose.model('HoneyWord',userSchema);

module.exports = userModel;