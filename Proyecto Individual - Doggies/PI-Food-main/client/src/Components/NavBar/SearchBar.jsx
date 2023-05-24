import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../Redux/actions";
import style from './SearchBar.module.css'

const SearchBar = ({setCurrentPage}) => {

const dispatch = useDispatch();
const [found, setFound] = useState("");

const searchHandler = (event) => {
    event.preventDefault()
    setFound(event.target.value)
}
const submitHandler = (event) => {
    event.preventDefault()
    if(found.length === 0) alert ('Debes ingresar una receta válida')
    else {dispatch(getRecipeByName(found))
    setCurrentPage(1)
    };
}


    return (
        <nav className={style.search}>
            <input id= "search" type="text" placeholder="Search Recipe..." onChange={(event) => {searchHandler(event)}} className={style.input}/>
            <button type="submit" className={style.searchbutton}><i onClick={(event) => {submitHandler(event); setFound('')}}>Search</i></button>
        </nav>
    )
}

export default SearchBar;