import { useState } from "react";
import style from './Login.module.css'
import { Link } from "react-router-dom";

const validate = (userData, setErrors, errors) => {
    if (!userData.username) setErrors({ ...errors, username: 'Debes ingresar un user' })
    else {
        if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3}$/.test(userData.username))
            setErrors({ ...errors, username: '' });
        else setErrors({ ...errors, username: 'User invalido, ingresar email' });
    }
}

const Login = () => {

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' })

    const handleChange = (event) => {
        const propiedad = event.target.name;
        const valor = event.target.value;

        setUserData({ ...userData, [propiedad]: valor })
        validate({ ...userData, [propiedad]: valor }, setErrors, errors);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        alert('Login exitoso')
    };

    return (
        <form onSubmit={submitHandler} className={style.login}>
            <div className={style.estilo1}>
                <label htmlFor="username">User:</label>
                <input type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                />
                <span>{errors.username}</span>
            </div>
            <div className={style.estilo2}>
                <label htmlFor="password">Password:</label>
                <input type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
            </div>

            <Link to="/home"><button type="submit" className={style.button}>Let's Cook!</button></Link>
        </form>
    )
}
export default Login;