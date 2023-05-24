import style from './Landing.module.css'
import Login from "../../Components/LogIn/Login";

const Landing = () => {
    return (
        <div className={style.container}> 
        <h1 className={style.h1}>Captain Cook!</h1>
        <p className={style.welcome}><i>"La cocina es un arte que despierta los sentidos y une a las personas alrededor de una mesa. En cada receta hay una historia que contar y un sabor que descubrir. ¡Bienvenidos a este viaje gastronómico donde la pasión por la comida nos une y nos inspira a crear momentos inolvidables!"</i></p>
        <p className={style.footer}>Gastón "El Gato Dumas" Acurio.-</p>
     
        <Login />
        </div>
    )
}
export default Landing; 