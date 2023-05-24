const { getAllRecipe, getRecipeName, getRecipeId, crearRecipe } = require ('../Controllers/recipeControllers');


const getAllRecipes = async (req, res) => {
    try {
        const allRecipes = await getAllRecipe();
        res.status(200).json(allRecipes);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const getRecipeById = async (req,res) => {
    const { id } = req.params;
    const fuente = isNaN(id) ? 'bdd' : 'api';
    //creo una funcion en este handler usando el 
    //operador ternario para saber donde buscar el ID
    try {
        const recipe = await getRecipeId(id, fuente);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getRecipeByName = async (req, res) => {
    const { name } = req.query
    const recipesName = !name ? res.status(404).json("La receta que intentas buscar no existe, intenta con otra por favor.")
    : res.status(201).json(await getRecipeName(name));
}

const createRecipe = async (req, res) => {
    const {title, image, summary, healthScore, stepByStep, diet} = req.body
    try {
        const newRecipe = await crearRecipe(title, image, summary, healthScore, stepByStep, diet)
        res.status(200).json(newRecipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    getRecipeByName,
    createRecipe,
};