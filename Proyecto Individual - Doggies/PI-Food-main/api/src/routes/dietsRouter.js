const { Router } = require('express');
const { getAllDiets, obtenerTodasLasDietas } = require('../Handlers/dietsHandlers')

const dietsRouter = Router();

dietsRouter.get('/', getAllDiets)
dietsRouter.get('/all', obtenerTodasLasDietas)

module.exports = dietsRouter;