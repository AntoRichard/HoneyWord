const hash = require('object-hash');
const userModel = require('../database/user');
const indexModel = require('../database/indexing');

exports.getLogin = (req, res) => {
    res.render('login');
}

exports.postLogin = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    if(username == null || password==null){
        // console.log('hello world');
        let hashedPassword = hash.sha1(password);
    let index = 0;

    // console.log(`${username}\n${password}`);
    // console.log(username+"\n"+password);
    let data = {
        username: username
    }
    indexModel.findOne(data, (err, result) => {
        if (err) throw err;
        // index = result.index;
        console.log(result.index);
        index = result.index;
    });
    console.log(index);
    userModel.findOne(data, (err, result) => {
        if (err) throw err;
        console.log(result);
        let honeywords = [result.password1, result.password2, result.password3, result.password4, result.password5, result.password6, result.password7, result.password8];
        let foundPassword = honeywords[index-1];
        if(foundPassword === hashedPassword)
        {
            res.redirect('/index');
            console.log(foundPassword);
            console.log(hashedPassword);
        }
        else{
            res.redirect('/login');
            console.log(foundPassword);
            console.log(hashedPassword);
        }
    });
    }else{
        res.redirect('/login');
    }
}