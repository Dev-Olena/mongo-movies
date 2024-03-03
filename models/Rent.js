const {Schema, model} = require('mongoose');

const rentSchema = new Schema({
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deadline: {
        type: Date
    },
    status: {
        type: String,
        enum: ['taken', 'returned', 'failed'],
        default: 'taken'
    }
});


const Rent = model('Rent', rentSchema);

module.exports = Rent;