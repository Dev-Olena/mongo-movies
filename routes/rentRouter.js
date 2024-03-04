const express = require('express');
const RentController = require('../controllers/Rent.controller');

const rentRouter = express.Router();

rentRouter.post('/', RentController.createOne);
rentRouter.get('/:rentId', RentController.getOne);
rentRouter.put('/:rentId', RentController.update);


module.exports = rentRouter;