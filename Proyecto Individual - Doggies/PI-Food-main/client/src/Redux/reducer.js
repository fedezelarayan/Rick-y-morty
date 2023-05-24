import { CREATED_FILTER, FILTER_BY_DIET, GET_DIETS, GET_RECIPES, ORDER_BY_HEALTHSCORE, ORDER_BY_NAME, SEARCH_RECIPE_BY_NAME } from "./actions";

const initialState = {
    recipes : [],
    allRecipes: [],
    diets: [],
}

const rootReducer = (state = initialState, action) => {
switch (action.type) {
    case GET_RECIPES:
        return {
            ...state,
            recipes: action.payload,
            allRecipes: action.payload,
        }
    case GET_DIETS:
        return {
            ...state,
            diets: action.payload,
        }
    case SEARCH_RECIPE_BY_NAME:
        return {
            ...state,
            recipes: action.payload,
        }
    case FILTER_BY_DIET:
        const todasRecetas = state.allRecipes;
        const filteredDiets = action.payload === "all" ? todasRecetas :
        todasRecetas.filter((elem) => elem.diets?.includes(action.payload))
        return{
            ...state,
            recipes: action.payload === "all" ? state.allRecipes : filteredDiets,
        }
    case CREATED_FILTER:
        const allRecipe = state.allRecipes;
        const createdFiltered = action.payload === "created" ? 
        allRecipe.filter((elem) => elem.created) :
        allRecipe.filter((element) => !element.created)
        return {
            ...state,
            recipes: action.payload === "all" ? state.allRecipes : createdFiltered,
        }
    case ORDER_BY_NAME:
        const orderedRecipes = action.payload === "ascName" ?
        state.recipes.sort(function (x, y) {
            if(x.title > y.title) return 1;
            if(y.title > x.title) return -1;
            return 0;
        }) : 
        state.recipes.sort(function(x, y){
            if(x.title > y.title) return -1;
            if(y.title > x.title) return 1;
            return 0
        })
        return {
            ...state,
            recipes: orderedRecipes
        }
    case ORDER_BY_HEALTHSCORE:
        const allHs = state.recipes;
        const valueTarget =  action.payload;
        let orderedHs = null;

        if(valueTarget === "ascHs"){
            orderedHs = allHs.sort((a, b) =>{
                if(a.healthScore < b.healthScore) {
                    return -1
                };
                if(a.healthScore > b.healthScore) {
                    return 1
                };
                return 0;
            })
        }
        if(valueTarget === "descHs"){
            orderedHs = allHs.sort((a, b) => b.healthScore - a.healthScore);
        }
        return {
            ...state,
            recipes: valueTarget === "all" ? state.allRecipes : orderedHs
        }

    default:
        return {...state};
}
}

export default rootReducer;