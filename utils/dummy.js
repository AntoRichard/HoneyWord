exports.getDummy = (req, res) => {
    res.render('dummy');
}

exports.postDummy = (err,res)=>{
    res.redirect('/dummy');
}