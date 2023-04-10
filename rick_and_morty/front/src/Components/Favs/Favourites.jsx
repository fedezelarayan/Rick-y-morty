import { useSelector } from 'react-redux'
import Card from '../Card/Card';


const Favourites = () => {
    const favourites = useSelector(state => state.favoritos)
    return (
        <>
        {
            favourites.map (({ id, name, species, gender, image }) => {
                return ( 
                    <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            /> )
            })
        }
        </>
    )
}; 

export default Favourites;