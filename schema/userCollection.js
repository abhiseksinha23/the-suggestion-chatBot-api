const mongoose = require('mongoose');

const userCollectionSchema = new mongoose.Schema({
    name: { type: String, default: "user" },
    userid: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    profilePicUrl: { type: String, default: "https://image.flaticon.com/icons/svg/145/145848.svg" },
});

module.exports = {
    userCollectionSchema: userCollectionSchema,
}