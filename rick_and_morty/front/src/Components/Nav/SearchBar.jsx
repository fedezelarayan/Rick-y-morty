import React, { useState } from "react";
import style from './Nav.module.css'

export default function SearchBar({ onSearch }){

    const [id, setId] = useState ('')
    const handleChange = (event) => {
       setId (event.target.value);
    }

    return(
         <nav>
        <div>
            <input  className={style.barra} type='search' placeholder="Ingresar ID" onChange={handleChange} />
            <button  className={style.boton} onClick={() => onSearch(id)}> Agregar </button>
        </div>
    </nav>
    )

}