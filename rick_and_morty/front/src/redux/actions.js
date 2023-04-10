export const ADD_FAVORITO = 'ADD_FAVORITO';
export const REMOVE_FAVORITO = 'REMOVE_FAVORITO';

export const addFavourite = (character) => {
    return { type: ADD_FAVORITO, payload: character};
};

export const removeFavourite =(id)=>{
    return { type: REMOVE_FAVORITO, payload: id };
};