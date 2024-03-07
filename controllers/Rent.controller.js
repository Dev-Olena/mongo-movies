// const {Rent, User, Movie} = require('../models/mongoModels');
const {Rent, User, Movie} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        // const {body} = req;
        // const rent = await Rent.create(body);
        const {body: {userId, movieId, deadline, status}} = req;
        const user = await User.findByPk(userId);
        const movie = await Movie.findByPk(movieId);
        const result = await user.addMovie(movie, {
            through: {
                deadline, status
            }
        })
        res.status(201).send({data: result});
        // res.status(201).send({data:rent});        
    } catch (error) {
        next(error)
    }
};

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {rentId}} = req;
        // const rent = await Rent.findById(rentId).
        //     populate('movie').
        //     populate('user');   
        const rent = await Rent.findAll({
            where: {
                id: rentId
            },
            include: [User, Movie]
        });
        res.status(200).send({data: rent});     
    } catch (error) {
        next(error)
    }
};

module.exports.update = async (req, res, next) => {
    try {
        const {body, params: {rentId}} = req;
        // const updated = await Rent.FindByIdAndUpdate(rentId, body, {returnDocument: 'after'});
        const updated = await Rent.update(body, {
            where: {
                id: rentId
            }
        });
        res.status(200).send({data: updated});        
    } catch (error) {
        next(error)
    }
};

module.exports.getAllUserRents = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        // const rents = await Rent.find({user: userId}).populate('user').populate('movie');
        const rents = await Rent.findAll({
            where: {
                userId: userId
            },
            include: [Movie]
        })
        res.status(200).send({data: rents});

    } catch (error) {
        next(error)
    }
};

