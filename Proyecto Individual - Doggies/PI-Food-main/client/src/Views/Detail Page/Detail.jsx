import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import style from './Detail.module.css'
import { Link } from "react-router-dom";
import predeterminada from "../../assets/predeterminada.jpg"

const Detail = () => {

    const { detailId } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/recipes/${detailId}`)
            .then((response) => setRecipe(response.data))
            .catch((error) => alert(error.message))
    }, [detailId])

    return (
        <div className={style.carddetail}>
            <Link to="/home"><button className={style.buttonsalir}><i>Salir</i></button></Link>
            <div className={style.detailcontent}>
                {recipe.title ? (
                    <>
                        <h3>Recipe N°: {recipe.id}</h3>
                        <div className={style.containerimg}>
                            <img src={recipe.image ? `${recipe.image}` : `${predeterminada}`} alt="" className={style.detailimage} />
                            <div>
                                <h1 className={style.detailtitle}>{recipe.title}.</h1>
                                <h2 className={style.detaildiethealth}>Diets: {/* .map((diet) => diet.name) */ recipe.diets.join(', ')}.</h2>
                                <h3 className={style.detaildiethealth}>Health Score: {recipe.healthScore}</h3>
                            </div>

                        </div>
                        <h3 className={style.summary}>Summary: {recipe?.summary?.replace(/<[^>]*>/g, "")}</h3>
                        <div>
                            <h3>Instructions: {recipe.created === true ? recipe.stepByStep : recipe.analyzedInstructions?.map(instr => (
                                <p key={instr.number}>Step {instr.number}: {instr.step}
                                    <hr /></p>
                            ))}</h3>
                        </div>
                    </>
                ) : (<h3> Loading...</h3>)
                }
            </div>
        </div>
    )
}
export default Detail; 