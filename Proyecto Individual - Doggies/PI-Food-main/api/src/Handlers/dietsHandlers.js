const getDiets = require("../Controllers/dietControllers");
const {Diet} = require ('../db');


const getAllDiets = async (req, res) => {
    const diets = await getDiets();
    try {       
        res.status(200).json(diets)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const obtenerTodasLasDietas = async (req, res) => {
    const dietas = await Diet.findAll();
    res.status(200).json(dietas)
}

module.exports = { getAllDiets, obtenerTodasLasDietas };