import { User, Document, Pet } from './schema';
import mongoose from 'mongoose';

async function run() {
    console.log('Connecting to database...');

    // await mongoose.connect('mongodb://localhost:27017/hackathonDB')
    await mongoose.connect("mongodb+srv://admin0:UUYVpH6WbZ7iwx4@cluster0.1buxm.mongodb.net/HackathonDB?retryWrites=true&w=majority");
    // Clear db
    await User.deleteMany({});
    await Document.deleteMany({});
    await Pet.deleteMany({});

    await new User({ uid: "1AqoYJNKx3XFOR2PLV7BKHf4pN12", name: "admin", documentList: ['62dc89095d4c0edc1e65abbe'] }).save();
    await new Pet().save();
    await new Document({ author: "1", content: "1234 123 123"}).save();
    
    await mongoose.disconnect();
    console.log('Done!');
}

run();
