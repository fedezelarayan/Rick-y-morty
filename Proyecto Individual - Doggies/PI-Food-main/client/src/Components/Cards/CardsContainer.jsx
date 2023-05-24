import Card from "../Card/Card";
import style from './CardsContainer.module.css'
import predeterminada from '../../assets/predeterminada.jpg'

const CardsContainer = ({recetas}) => {

    return (
        <div className={style.container}>
            {
                recetas?.map(({id, image, title, diets, created})=>{
                    return <Card
                    key = {id}
                    id = {id}
                    image = {image ? `${image}` : `${predeterminada}`}
                    title = {title} 
                    diets =  {created === true ? diets.map((diet) => diet.name).join(', ') :
                                diets.join(', ')}
                    />
                })
            }
        </div>
    )
};

export default CardsContainer;