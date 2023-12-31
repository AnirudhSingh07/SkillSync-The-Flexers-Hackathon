// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    physics: Number,
    chemistry: Number,
    economy: Number,
    psychology: Number,
    maths: Number,
    business: Number,
    politics: Number,
    sports: Number,
    careerPath: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
