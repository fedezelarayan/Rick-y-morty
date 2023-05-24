import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({id, image, title, diets}) =>{
    return (
        <Link to = {`/detail/${id}`} className={style.enlace}> <div className={style.card}>
            <h1 className={style.title}>{title}</h1>
            <img src={image} alt="food" className={style.image} />
            <h2 className={style.diets}>{diets}</h2>
        </div>
        </Link>
    )
}

export default Card;