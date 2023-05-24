import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "./SearchBar";
import style from './NavBar.module.css'

const NavBar = ({setCurrentPage}) => {
    return (
        <nav >
            <div className={style.navbarsearch}>
                <SearchBar setCurrentPage={setCurrentPage}/>
            </div>
            <div className={style.navbar}>
                <Link to="/create">
                    <button className={`${style.button} ${style.createbutton}`}>
                    Crea tu propia receta!
                    </button></Link>
                <Link to="/about">
                    <button className={`${style.button} ${style.aboutbutton}`}>
                    About us
                    </button>
                    </Link>
            </div>

        </nav>
    )
}

export default NavBar;