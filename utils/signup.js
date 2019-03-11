const userModel = require('../database/user');
const indexModel = require('../database/indexing');
const randomWords = require('random-words');
const hash = require('object-hash');


exports.getSignup =  (req, res) => {
    res.render('signup');
}

exports.postSignup = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    console.log(`${username}\n${password}`);
    let randwrd = randomWords(8);
    let randnum = Math.floor(Math.random() * 7);
    randwrd[randnum] = password;
    randnum = randnum + 1;
    // console.log(randwrd+'\n'+randnum);
    console.log(randnum)
    let nrmlData = {
        username: username,
        password1: randwrd[0],
        password2: randwrd[1],
        password3: randwrd[2],
        password4: randwrd[3],
        password5: randwrd[4],
        password6: randwrd[5],
        password7: randwrd[6],
        password8: randwrd[7]
    };
    let HashedData = {
        username: username,
        password1: hash.sha1(randwrd[0]),
        password2: hash.sha1(randwrd[1]),
        password3: hash.sha1(randwrd[2]),
        password4: hash.sha1(randwrd[3]),
        password5: hash.sha1(randwrd[4]),
        password6: hash.sha1(randwrd[5]),
        password7: hash.sha1(randwrd[6]),
        password8: hash.sha1(randwrd[7]),
    };

    console.log(nrmlData);
    console.log(hash.sha1(password));
    let indexData = {
        username: username,
        index: randnum
    }
    console.log(indexData);

    userModel.create(HashedData, (err, result) => {
        if (err) throw err;
        console.log(`${result}\ndata stored in database`);
    });

    indexModel.create(indexData, (err, result) => {
        if (err) throw err;
        console.log(`${result}\index stored in database`);
    });
    res.redirect('/login');
}