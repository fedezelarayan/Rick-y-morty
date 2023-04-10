import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import style from './Detail.module.css';
import axios from "axios";

const Detail = () => {
    const  { detailId } = useParams();
    const [character, setCharacter] = useState({})
    
    
    useEffect(() => {
        const URL_BASE= "https://be-a-rym.up.railway.app/api";
        const KEY = "6efd8a9f97d1.f082998d50a70b22d308";

       /*  fetch(`${URL_BASE}/character/${detailId}?key${KEY}`)
        .then (response => response.json())
        .then((response) => 
            setCharacter(response.data));
   
    }, [detailId]); */
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => 
            setCharacter(response.data));
    }, [detailId])

 return (
    <div>
        {character.name ?  (
            <> 
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
            <img src={character.image} alt="" />
            </>
        ):( <h3>Loading...</h3> )
        }
     </div>
    )
}
export default Detail;