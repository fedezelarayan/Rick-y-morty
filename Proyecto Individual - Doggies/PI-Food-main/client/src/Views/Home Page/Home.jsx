import { useEffect, useState } from 'react';
import CardsContainer from '../../Components/Cards/CardsContainer'
import { useDispatch, useSelector } from 'react-redux';
import { filterByDiet, getRecipes, createdFilter, orderByName, orderByHealthScore, getDiets } from '../../Redux/actions';
import style from './Home.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import Paginado from './Paginado';

const Home = () => {
    const dispatch = useDispatch();

    const filtDiets = useSelector((state) => state.diets);
    const allRecipes =  useSelector ((state)=> state.recipes);
    
    const [ordenamiento, setOrdenamiento] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] =useState(9);
    const iLastRecipe = currentPage * recipesPerPage
    const iFirstRecipe = iLastRecipe - recipesPerPage
    const currentRecipe = allRecipes.slice(iFirstRecipe, iLastRecipe);
    const totalPages = 11;

    const goNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage=> currentPage +1);
          }
        
    }
    const goPrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage=> currentPage -1);
          }        
    }
    
    useEffect(() =>{
        dispatch (getRecipes())
        dispatch (getDiets())
        setCurrentPage(1);
        setRecipesPerPage(9);
    }, [dispatch])

    useEffect(() => {
        dispatch (getRecipes())
        
    }, [dispatch])
    
    const clickHandlerDiets = (event) => {
        dispatch(filterByDiet(event.target.value))
        setCurrentPage(1);
        event.preventDefault();
    }
    const filterCreated = (event) => {
        dispatch(createdFilter(event.target.value))
        setCurrentPage(1);
    }
    const handlerHealthScore = (event) => {
        event.preventDefault();
        dispatch(orderByHealthScore(event.target.value))
        setCurrentPage(1);
        setOrdenamiento(`Listo${event.target.value}`);  
    }
    const handlerName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setCurrentPage(1);
        setOrdenamiento(`Listo${event.target.value}`);
    }

    return (
        <div className={style.fondo}> 
        <div>
            <NavBar setCurrentPage = {setCurrentPage}/>
        </div>
        <nav className={style.filter}>
{/*             AQUI VAN LOS SELECT PARA FILTRAR */}
            <select onChange={event => clickHandlerDiets(event)}>
                <option value="">Diets</option> 
                <option value="all">Todas</option>{
                    filtDiets?.map((element) => {
                        return <option key={element.id} 
                        value={element.name}>{element.name}</option>
                    })
                }
            </select>
            <select className={style.filter} onChange={event => filterCreated(event)}>
                    <option value="all">Todos</option>
                    <option value="created">Creados</option>
                    <option value="exist">Existentes</option>
            </select>
            <select onChange={event => handlerHealthScore(event)}>
                    <option value="all">Health Score</option>
                    <option value="ascHs">0-100</option>
                    <option value="descHs">100-0</option>
            </select>
            <select onChange={event => handlerName(event)}>
                    <option value="">Nombre</option>
                    <option value="ascName">A - Z</option>
                    <option value="descName">Z - A</option>
            </select>
        </nav>
        <hr />
        <Paginado
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes.length}
            goNext = {goNext}
            goPrev = {goPrev}
            currentPage = {currentPage}
        />
        <div>
            <CardsContainer recetas = {currentRecipe} />
        </div>
        </div>
    )
}
export default Home;