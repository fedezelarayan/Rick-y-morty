import axios from 'axios';
export const GET_RECIPES = "GET_RECIPES";
export const SEARCH_RECIPE_BY_NAME = "SEARCH_RECIPE_BY_NAME"; 
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const GET_DIETS = "GET_DIETS";
export const CREATED_FILTER = "CREATED_FILTER";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_HEALTHSCORE = "ORDER_BY_HEALTHSCORE";
const URL_APP = 'http://localhost:3001/recipes/';
const DIET_URL = 'http://localhost:3001/diets/all';

export function getRecipes () {
    return async function (dispatch) {
        const apiRecip = await axios.get(`${URL_APP}`);
        const recipes= apiRecip.data; 
        dispatch ({type: GET_RECIPES, payload: recipes})
    }
}
export function getDiets () {
    return async function (dispatch) {
        const dietsData = await axios.get(`${DIET_URL}`)
        const filtDiet = dietsData.data;
        dispatch({type: GET_DIETS, payload: filtDiet})
    }
};

export function getRecipeByName (name) {
    return async function (dispatch){
        try {
            const recName = await axios.get(`${URL_APP}name?name=${name}`);
            return dispatch({type: SEARCH_RECIPE_BY_NAME, payload: recName.data})
        } catch (error) {
            alert((error) => error.message)
        }
    }
};
export function orderByHealthScore (payload) {
    return {
        type: ORDER_BY_HEALTHSCORE,
        payload,
    }
}
export function filterByDiet (payload) {
    return {
        type: FILTER_BY_DIET,
        payload,
    } 
};

export function createdFilter (payload) {
    return {
        type: CREATED_FILTER,
        payload, 
    }
}
export function orderByName (payload) {
    return {
        type: ORDER_BY_NAME,
        payload,
    }
}