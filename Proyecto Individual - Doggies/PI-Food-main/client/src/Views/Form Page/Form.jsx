import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiets } from "../../Redux/actions";
import style from './form.module.css';
import axios from "axios";


const Form = () => {

    const dispatch = useDispatch();
    const allDiets = useSelector((state) => state.diets);

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    const [form, setForm] = useState({
        title: "",
        summary: "",
        healthScore: "",
        stepByStep: "",
        image: "",
        diet: [] ,
    });
    const [errors, setErrors] = useState({
        title: "",
        summary: "",
        healthScore: "",
        stepByStep: "",
        image: "",
        diet: [0],
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;


        validateName({ ...form, [property]: value });
        setForm({ ...form, [property]: value });
    }

    const validateName = (form) => {
        if (/^[a-zA-Z ]+$/.test(form.title) && form.title.length > 12) {
            setErrors({ ...errors, title: "" })
        } else {
            setErrors({ ...errors, title: "Debes darle un nombre válido!" })
        }
        if (form.title === '') setErrors({ ...errors, title: "Falta darle un nombre a tu receta" })
    }

    const [health, setHealth] = useState("0");
    const changeHealth = (event) => {
        setHealth(event.target.value);
    }

    const handlerDiets = (event) => {
        setForm({
            ...form,
            diet: [...form.diet, event.target.value]
        })
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        axios.post ('http://localhost:3001/recipes/create', form)
        .then(res=>alert("Receta creada exitosamente!"))
        .catch((error) => alert(error))
    }


    return (
        <div className={style.fondo}>
            <form className={style.recipeform} onSubmit={handlerSubmit}>
                <Link to="/home"><button className={style.buttonsalir}><i>Salir</i></button></Link>
                <h1>Creá tu propia receta!</h1>
                <div>
                    <label className={style.recipelabel}>Name:</label>
                    <input type="text"
                        value={form.title}
                        onChange={changeHandler}
                        name="title"
                        className={style.recipeh2} />
                    {errors.title && <span>{errors.title}</span>}
                </div>
                <div>
                    <label className={style.recipelabel}>Summary:</label>
                    <textarea id="parrafo"
                        name="summary" rows="4" cols="50"
                        value={form.summary}
                        onChange={changeHandler}
                        className={style.recipeh2}></textarea>
                </div>
                <div>
                    <label htmlFor="" className={style.recipelabel}>Step by step:</label>
                    <textarea id="stepByStep"
                        name="stepByStep" rows="4" cols="50"
                        value={form.stepByStep}
                        onChange={changeHandler}
                        className={style.recipeh2}></textarea>
                </div>
                <div>
                    <label htmlFor="" className={style.recipelabel}>Health Score:</label>
                    <input type="range" min="0" max="100"
                        name="healthScore"
                        onChange={(e) => { changeHandler(e); changeHealth(e) }}
                        value={health}
                        className={style.recipeh2} />
                    {<span>{health}</span>}
                </div>
                <div>
                    <label className={style.recipelabel}>Diet/s:</label>
                    <input type=""
                        value={form.diet}
                        onChange={changeHandler}
                        name="diet" />
                </div>
                <select onChange={handlerDiets}
                    multiple={5} className={style.recipeh2}>
                    <option value="all"></option>{
                        allDiets?.map((elem) => {
                            return <option key={elem.id}
                                value={elem.id} className={style.dietas}>{elem.name}</option>
                        })
                    }
                </select>
                <div>
                    <label htmlFor="" className={style.recipelabel}>Img's URL:</label>
                    <input type="text"
                        value={form.image}
                        className={style.recipeh2}
                        onChange={changeHandler} 
                        name="image"
                        />
                </div>
                <button type="sumbit" className={style.button}>Create!</button>
            </form>
        </div>
    )
}
export default Form;