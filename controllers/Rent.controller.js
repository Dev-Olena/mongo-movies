const {Rent, User, Movie} = require('../models/mongoModels');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const rent = await Rent.create(body);
        res.status(201).send({data:rent});        
    } catch (error) {
        next(error)
    }
};

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {rentId}} = req;
        const rent = await Rent.findById(rentId).
            populate('movie').
            populate('user');
        res.status(200).send({data: rent});        
    } catch (error) {
        next(error)
    }
};

module.exports.update = async (req, res, next) => {
    try {
        const {body, params: {rentId}} = req;
        const updated = await Rent.FindByIdAndUpdate(rentId, body, {returnDocument: 'after'});
        res.status(200).send({data: updated});        
    } catch (error) {
        next(error)
    }
};

module.exports.getAllUserRents = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const rents = await Rent.find({user: userId}).populate('user').populate('movie');
        res.status(200).send({data: rents});

    } catch (error) {
        next(error)
    }
}

