const axios = require('axios');
const { Diet } = require('../db');
require('dotenv').config();
const apiUrl = process.env.URL_API;
const apiKey = process.env.API_KEY;

const getDiets = async () => {
    const diets = await Diet.findAll();
    if (diets.length === 0) {
        const apiDiets = (await axios.get(`${apiUrl}?apiKey=${apiKey}&addRecipeInformation=true&number=100`)).data.results
        const dietitas = apiDiets.map((elements) => elements.diets)
            .filter(die => die != null).flat();

        const filteredDiets = [...new Set(dietitas)].sort()
            .map((elem) => {
                return {
                    name: elem
                }
            })
        return await Diet.bulkCreate(filteredDiets);
    } else {
        console.log('Ya existen registros en la base de datos');
    }
}


module.exports = getDiets;
