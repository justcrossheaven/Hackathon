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

export const User = mongoose.model('User', userSchema);

export const Document = mongoose.model('Document', documentSchema);

export const Pet = mongoose.model('Pet', petSchema);


