import React from "react";
import SearchBar from "./SearchBar";
import style from './Nav.module.css'
import { Link } from "react-router-dom";

export default function Nav(props){
    return( 
    <nav className={style.container}>
        <SearchBar onSearch = {props.onSearch} />
    <div> 
        <h2> 
        <Link to='/about'> About </Link>  
        <Link to='/home'> Home </Link>
        </h2>
     </div> 
    </nav>

    )
}