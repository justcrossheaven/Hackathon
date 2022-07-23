const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    uid:  String,
    name: String,
    profilePic: String,
    documentList: {type: Schema.Types.ObjectId, ref: 'Document'},
});

const documentSchema = new Schema({
    title:  String,
    author: {type: String, ref: 'User'},
    content: String,
}, {
    timestamps: true
});

const petSchema = new Schema({
    documentKey: {type: Schema.Types.ObjectId, ref: 'Document'},
    type: String,
    name: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

const Document = mongoose.model('Document', documentSchema);

const Pet = mongoose.model('Pet', petSchema);

async function run() {
    console.log('Connecting to database...');
    await mongoose.connect('mongodb+srv://admin0:UUYVpH6WbZ7iwx4@cluster0.1buxm.mongodb.net/HackathonDB?retryWrites=true&w=majority');

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

run();