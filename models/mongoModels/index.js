const mongoose = require('mongoose');
const User = require('./User');
const Movie = require('./Movie');
const Rent = require('./Rent');
const db = require('../../config/mConfig.json');

const CONFIG = db[process.env.NODE_ENV || "development"];

const url = `mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`;

mongoose.connect(url).catch((error) => {
    console.log('connection failed');
    process.exit(1);
});

module.exports = {
    User,
    Movie,
    Rent
};