import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css'
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from "../../redux/actions";

 function Card ({ id, name, species, gender, image, onClose, addFavourite, removeFavourite, favoritos }) {
       
    const[isFav, setIsFav] = useState (false);

    const handleFavourite = () => {
        if(isFav) {
            setIsFav(false);
            removeFavourite(id);
        }else{
            setIsFav(true);
            addFavourite({ id, name, species, gender, image, onClose, addFavourite, removeFavourite })
        }
    };    

    useEffect(() => {
        favoritos.forEach((fav) => {
           if (fav.id === id) {
              setIsFav(true);
           }
        });
     }, [favoritos]);

    return ( 
    <div className={style.container}>
        { isFav ? ( 
        <button onClick={handleFavourite}>❤️</button>
        ) : ( 
        <button onClick={handleFavourite}>🤍</button>)}
        <button onClick={onClose}>X</button>
        <Link to= {`/detail/${id}`}><h1 className={style.texto}>{name}</h1></Link>
        <img className={style.image} src={image} alt='' />
        <h2 className={style.texto}>{species}</h2>
        <h2 className={style.texto}>{gender}</h2>

    </div>
    
    )
}

const mapDispatchToProps = (dispatch) => {
     return{
        addFavourite: (character) => {dispatch(addFavourite(character))},
        removeFavourite: (id) => {dispatch(removeFavourite(id))}
     }
};

const mapStateToProps = (state) => {
    return {
        favoritos: state.favoritos,

    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Card);