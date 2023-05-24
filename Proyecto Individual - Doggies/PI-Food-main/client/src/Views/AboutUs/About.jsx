import style from './About.module.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={style.fondo}>
            <Link to="/home"><button><i>Salir</i></button></Link>
            <div>
                <h2>Proyecto individual "Foods & Recipes"</h2>
            </div>
            <footer className={style.footer}>
                <div className={style.footercontent}>
                    <ul>
                    <a href="https://www.facebook.com/fede.zela"><img src="https://180dc.org/wp-content/uploads/2014/04/facebook-logo-facebook-logo-9.png" alt="fb" className={style.img} /></a>
                    <a href="https://www.instagram.com/fede_zelarayan/"><img src="https://i1.wp.com/multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente2.png?fit=1000%2C1000&ssl=1" alt="ig" className={style.ig}/></a>
                    <a href="https://github.com/fedezelarayan"><img src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png" alt="gh" className={style.gh}/></a>
                    <a href="https://github.com/fedezelarayan"><img src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo.png" alt="gh" className={style.hr}/></a>
                    </ul>
                </div>
            </footer>
        </div>

    )
}
export default About; 