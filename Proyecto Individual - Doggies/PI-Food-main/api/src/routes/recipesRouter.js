const { Router } = require('express');
const { getAllRecipes, getRecipeById, getRecipeByName, createRecipe } = require('../Handlers/recipesHandlers')

const recipesRouter = Router();

recipesRouter.get('/', getAllRecipes);
recipesRouter.get('/name', getRecipeByName);
recipesRouter.get('/:id', getRecipeById);
recipesRouter.post('/create', createRecipe);

module.exports = recipesRouter;