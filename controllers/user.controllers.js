const db = require('../db');
const shortid = require('shortid');

module.exports.index = (req, res) => {
    console.log(db.get('users').value());
    // res.send({users: db.get('users').value()});
    res.render('users/index', {users: db.get('users').value()});
},
module.exports.createRender= (req, res) => {
    res.render('users/create')
}
module.exports.searchRender= (req, res) => {
    const name = req.query.name;
    const matchedValues = db.get('users').value().filter(function(user)
    {
       return user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    res.render('users/index', {users: matchedValues});
}
module.exports.createRender = (req, res, next) => {
    console.log(req.body);
    // tạo 1 id 
    req.body.id = shortid.generate();
    console.log(req.body.id);
    db.get('users').push(req.body).write();
    res.redirect('../users');
}
module.exports.viewRender = (req, res) => {
    const id = req.params.id;
    console.log(typeof id);
    const users = db.get('users').find({ id: id }).value();
    console.log(users.name);
    res.render('users/view', {users: users});
}