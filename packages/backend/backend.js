const express = require('express');
const User = require('./db');

const app = express()

app.get('/documentInfo', function (req, res) {
    const dbDocument = await Document.findById(req.query.id);
    
    if (dbDocument) {
        res.json(dbDocument);
    } else {
        res.statusCode(404);
    }
})

app.get('/alldocuments', (req, res) => {

  return res.send('Received a GET HTTP method');
});

//if loggin successfully, create local user
app.post('/user', (req, res) => {
    const userExist = await User.findOne({ uid: req.body.uid });
    
    if (!userExist) {
    const user = new User({
        uid: req.body.uid,
        name: req.body.name,
        profilePic: req.body.profilePic
    });
    try {
        await user.save();
    } catch { err =>
        res.status(400).send(err);
    }
  }
  return res.send(200);
});

//update document
app.put('/', (req, res) => {
    

    return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(3001, () =>
  console.log(`Example app listening on port 3001!`),
);