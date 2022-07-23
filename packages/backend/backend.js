// import { run } from './db';
import cors from "cors";
import { User, Document, Pet } from './db';
const express = require('express');
const mongoose = require('mongoose');

const app = express()
app.use(cors({ credentials: true, origin: true }));
app.get('/documentInfo', async function (req, res) {
    console.log(req)
    const dbDocument = await Document.findById(req.query.id).exec();
    if (dbDocument) {
        res.json(dbDocument);
    } else {
        res.statusCode(404);
    }
})

app.get('/alldocuments', async function(req, res) {
    const dbUser = await User.findOne({ uid: req.body.uid }).exec();

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
app.post('/user', async function(req, res) {
    const dbUser = await User.findOne({ uid: req.body.uid }).exec();
    
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
app.put('/document', async function(req, res) {
    const id = req.body.id;
    const dbDocument = await Document.findById(id).exec();
    
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

app.delete('/document', async (req, res) => {
    try {
        await Document.deleteOne({ _id: req.body.id }).exec();
        return res.send(200);
    } catch {
        return res.send(400);
    }
    
});


async function run() {
    console.log('Connecting to database...');
    // await mongoose.connect('mongodb+srv://admin0:UUYVpH6WbZ7iwx4@cluster0.1buxm.mongodb.net/HackathonDB?retryWrites=true&w=majority');
    await mongoose.connect("mongodb://127.0.0.1:27017/hackathonDB");
    // Clear db
    await User.deleteMany({});
    await Document.deleteMany({});
    await Pet.deleteMany({});

    await new User({ uid: "1" }).save();
    await new Pet().save();
    await new Document({ author: "1" }).save();
    
    await mongoose.disconnect();
    console.log('Done!');
}


run().then(() => {
    app.listen(3001, () =>
        console.log(`Example app listening on port 3001!`),
    );
}).catch(err => {
    console.log(err);
});