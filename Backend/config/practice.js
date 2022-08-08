/* app.post('/api/user', (req, res) => {
    const User = require(userModel);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            res.status(500).send(err);
        }
            res.status(200).send(user);
    });
}); 

 app.post('/api/user', (req, res) => {
    const User = require(userModel);
    const data = req.body;
    const user = new User(data);
    User.create(user, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(user);
    });
}); 

 app.get('/api/user', (req, res) => {
    const User = require(userModel);
    User.find((err, users) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(users);
        }
    });
}); 

app.delete('/api/user/:id', (req, res) =>{
    const User = require(userModel);
    User.findByIdAndRemove(req.params.document, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(user);
        }
    });
});

app.put('/api/user/:id', (req, res) => {
    const User = require(userModel);
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(user);
        }
    });
});  */