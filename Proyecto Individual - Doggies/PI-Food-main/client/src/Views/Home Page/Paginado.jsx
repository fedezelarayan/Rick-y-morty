import style from "./Paginado.module.css"

export default function Paginado({ recipesPerPage, allRecipes, goNext, goPrev, currentPage }) {

    const pageNumber = [];

    for (let i = 1; i < Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <div>
                <button onClick={goPrev} disabled={pageNumber === 1} className={style.button}>Prev</button>
                {pageNumber.map((number) => (
                    <span
                        key={number}
                        className={currentPage === number ? style.current : style.number}>
                        {number}
                    </span>
                ))}
                <button onClick={goNext} disabled={pageNumber === pageNumber.length} className={style.button}>Next</button>
            </div>
        </nav>
    )
}