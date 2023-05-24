/* const db = require('../db'); */
const { Recipe, Diet } = require('../db');
const axios = require('axios');
require('dotenv').config();
const apiUrl = process.env.URL_API;
const apiKey = process.env.API_KEY;

const cleanData = (array) => {
    return array.map((element) => {
        return {
            id: element.id,
            title: element.title,
            image: element.image,
            vegetarian: element.vegetarian,
            vegan: element.vegan,
            diets: element.diets,
            glutenFree: element.glutenFree,
            healthScore: element.healthScore,
            summary: element.summary,
            analyzedInstructions: element.analyzedInstructions[0]?.steps.map((el) => {
                return {
                    number: el.number,
                    step: el.step
                }
            }),
        }
    })
}

const getAllRecipe = async () => {
    //traigo todo de la bdd incluyendo el modelo diet, con el nombre 
    //y atra ves de qué atributo se relacionan 
    const dbRecipes = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: { attributes: [] }
        }
    })
    //ahora traigo toda la info de la api
    const apiRecipes = (await axios.get(`${apiUrl}?apiKey=${apiKey}&addRecipeInformation=true&number=100`)).data.results
    const totalRecipes = cleanData(apiRecipes, dbRecipes);
    return [...dbRecipes, ...totalRecipes];

}

const filteredRecipe = (recipes) => {
    return {
        id: recipes.id,
        title: recipes.title,
        image: recipes.image,
        vegetarian: recipes.vegetarian,
        vegan: recipes.vegan,
        diets: recipes.diets,
        glutenFree: recipes.glutenFree,
        healthScore: recipes.healthScore,
        summary: recipes.summary,
        analyzedInstructions: recipes.analyzedInstructions[0]?.steps.map((el) => {
            return {
                number: el.number,
                step: el.step
            }
        }),
    }
}

const filteredRecipeDb = (recipes) => {
    return {
        id: recipes.id,
        title: recipes.title,
        image: recipes.image,
        summary: recipes.summary,
        vegetarian: recipes.vegetarian,
        vegan: recipes.vegan,
        glutenFree: recipes.glutenFree,
        healthScore: recipes.healthScore,
        stepByStep: recipes.stepByStep,
        diets: recipes.diets?.map((el) => el.name),
        created: recipes.created,
    }
}

const getRecipeId = async (id, fuente) => {
    //operador ternario para saber si el id viene de la bdd o de la api
    const recipes = fuente === 'api'
        ? (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)).data
        : await Recipe.findByPk(id, {
            include: {
                model: Diet,
                attributes: ['name'],
                through: { attributes: [] },
            }
        })
    console.log(recipes);
    return fuente === 'api' ? filteredRecipe(recipes) : filteredRecipeDb(recipes);
}

const getRecipeName = async (name) => {

    const dbRecips = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: { attributes: [] }
        }
    })
    const apiRecipesPure = (await axios.get(`${apiUrl}?apiKey=${apiKey}&addRecipeInformation=true&number=100`)).data.results;
    const apiRecipess = cleanData(apiRecipesPure);

    const databaseRecipes = dbRecips.filter((rec) => rec.title.toLowerCase().includes(name.toLowerCase()));
    const filterRecipes = apiRecipess.filter((rec) => rec.title.toLowerCase().includes(name.toLowerCase()));

    return [...filterRecipes, ...databaseRecipes]
}

const crearRecipe = async (title, image, summary, healthScore, stepByStep, diet) => {
    const newRecipes = await Recipe.create({ title, image, summary, healthScore, stepByStep })
    newRecipes.addDiet(diet)
    return newRecipes;
}

module.exports = {
    getAllRecipe,
    getRecipeId,
    getRecipeName,
    crearRecipe,
}