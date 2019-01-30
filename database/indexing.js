const mongoose = require('mongoose');

const indexSchema = new mongoose.Schema({
    username : String,
    index : Number
});

const indexModel = mongoose.model('index',indexSchema);

module.exports = indexModel;