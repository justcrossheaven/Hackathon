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
    const dbUser = await User.findOne({ uid: req.body.uid });

    if (dbUser) {
        const documentIdList = dbUser.documentList;

        const documentList = await Document.find({
            '_id': { $in: documentIdList }
        });

        res.json(documentList);
    }

    return res.json([]);
});

//if loggin successfully, create local user
app.post('/user', (req, res) => {
    const dbUser = await User.findOne({ uid: req.body.uid });
    
    if (!dbUser) {
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
app.put('/document', (req, res) => {
    const id = req.body.id;
    const dbDocument = await Document.findById(id);
    
    if (dbDocument) {
        await Document.updateOne(
            { _id: id }, 
            {
                $set: { 
                    "content": req.body.content,
                    "title": req.body.title
                }
            },
        )
        return res.send("Successful!");
    };
    
    return res.send(400);
});

app.delete('/document', (req, res) => {
    try {
        await Document.deleteOne({ _id: req.body.id });
        return res.send(200);
    } catch {
        return res.send(400);
    }
    
});

app.listen(3001, () =>
  console.log(`Example app listening on port 3001!`),
);