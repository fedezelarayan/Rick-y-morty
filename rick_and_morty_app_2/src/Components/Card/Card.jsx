import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css'

export default function Card ({ id, name, species, gender, image, onClose }) {
       
    
    return ( 
    <div className={style.container}>
        <button onClick={onClose}>X</button>
        <Link to= {`/detail/${id}`}><h1 className={style.texto}>{name}</h1></Link>
        <img className={style.image} src={image} alt='' />
        <h2 className={style.texto}>{species}</h2>
        <h2 className={style.texto}>{gender}</h2>

    </div>
    
    )
}