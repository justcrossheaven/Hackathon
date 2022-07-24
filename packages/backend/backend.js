import cors from "cors";
import { User, Document, Pet } from './schema';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());

app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.get('/documentInfo', async function (req, res) {
    const dbDocument = await Document.findById(req.query.id).exec();
    if (dbDocument) {
        res.json(dbDocument);
    } else {
        res.send(404);
    }
})

app.get('/alldocuments', async function (req, res) {
    const dbUser = await User.findOne({ uid: req.query.id }).exec();

    if (dbUser) {
        const documentIdList = dbUser.documentList;

        const documentList = await Document.find({
            '_id': { $in: documentIdList }
        });
        res.json(documentList);
    } else {
        res.send(404);
    }
});

//if loggin successfully, create local user
app.post('/user', async function (req, res) {
    const user = new User({
        uid: req.body.uid,
        name: req.body.name,
    });
    await user.save();
    console.log(user)
    res.json(user);
});

app.post('/document', async function (req, res) {
    const dbDocument = new Document({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        wordCount: req.body.wordCount
    });
    await dbDocument.save();
    res.json(dbDocument);
});

//update document
app.put('/document', async function (req, res) {
    const id = req.body.id;
    const dbDocument = await Document.findById(id).exec();
    if (dbDocument) {
        dbDocument.title = req.body.title;
        dbDocument.author = req.body.author;
        dbDocument.content = req.body.content;
        dbDocument.wordCount = req.body.wordCount;
        await dbDocument.save();
        res.json(dbDocument);
    }else{
        res.send(400);
    }
});

app.delete('/document', async (req, res) => {
    try {
        await Document.deleteOne({ _id: req.body.id }).exec();
        return res.send(200);
    } catch {
        return res.send(400);
    }

});

mongoose.connect('mongodb+srv://admin0:UUYVpH6WbZ7iwx4@cluster0.1buxm.mongodb.net/HackathonDB?retryWrites=true&w=majority')
    .then(() => app.listen(3001, () => console.log(`App server listening on port 3001!`)));
// mongoose.connect('mongodb://localhost:27017/hackathonDB')
//     .then(() => app.listen(3001, () => console.log(`App server listening on port 3001!`)));