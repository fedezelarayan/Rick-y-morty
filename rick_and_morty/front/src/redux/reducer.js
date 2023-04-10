import { ADD_FAVORITO, REMOVE_FAVORITO } from './actions';

const initialState = {
    favoritos: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){

        case ADD_FAVORITO:
            return {...state, favoritos:[...state.favoritos, action.payload]};
        case REMOVE_FAVORITO:
            return {...state, favoritos: state.favoritos.filter((char) => char.id !== action.payload)};
        default:
            return { ...state }; 
    }
}
export default rootReducer; 