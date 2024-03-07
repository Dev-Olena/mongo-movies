// const {User} =require('../models/mongoModels');
const {User} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const user = await User.create(body);
        res.status(201).send({data: user})
    } catch(error) {
        next(error)
    }
};

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        // const oneUser = await User.findById(userId);
        const oneUser = await User.findByPk(userId);
        res.status(200).send({data: {oneUser}});
    } catch (error) {
        next(error)
    }
};

module.exports.getAll = async (req, res, next) => {
    try {
        // const users = await Movie.find({});
        const users = await User.findAll();
        res.status(200).send({data: {users}});
    } catch (error) {
        next(error)
    }
};

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        // const deleted = await User.findByIdAndDelete(userId);
        const deleted = await User.destroy({
            where: {
                id: userId
            }
        })
        res.status(200).send({data: {deleted}});
    } catch (error) {
        next(error)
    }
};

module.exports.updateOne = async (req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        // const updated = await User.findByIdAndUpdate(userId, body, {returnDocument: 'after'});
        const updated = await User.update(body, {
            where: {
                id: userId
            }
        })
        res.status(200).send({data: {updated}});
    } catch (error) {
        next(error)
    }
};