const {User} =require('../models/mongoModels');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const newUser = await User.create(body);
        res.status(201).send({data: {newUser}});
    } catch (error) {
        next(error)
    }
};

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const oneUser = await User.findById(userId);
        res.status(200).send({data: {oneUser}});
    } catch (error) {
        next(error)
    }
};

module.exports.getAll = async (req, res, next) => {
    try {
        const users = await Movie.find({});
        res.status(200).send({data: {users}});
    } catch (error) {
        next(error)
    }
};

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const deleted = await User.findByIdAndDelete(userId);
        res.status(200).send({data: {deleted}});
    } catch (error) {
        next(error)
    }
};

module.exports.updateOne = async (req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const updated = await User.findByIdAndUpdate(userId, body, {returnDocument: 'after'});
        res.status(200).send({data: {updated}});
    } catch (error) {
        next(error)
    }
};