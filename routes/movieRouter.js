const express = require('express');
const MovieController = require('../controllers/Movie.controller');

const movieRouter = express.Router();

movieRouter.post('/', MovieController.createOne);
movieRouter.get('/', MovieController.getAll);
movieRouter.get('/:movieId', MovieController.getOne);
movieRouter.put('/:movieId', MovieController.updateOne);
movieRouter.delete('/:movieId', MovieController.deleteOne);





module.exports = movieRouter;