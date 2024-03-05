const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true
    },
    gender: String,
    favoriteFilms: [String]
});

const User = model('User', userSchema);

module.exports = User;

// User
// - firstName
// - lastName
// *- email,
// - gender
// - favouriteFilms: []