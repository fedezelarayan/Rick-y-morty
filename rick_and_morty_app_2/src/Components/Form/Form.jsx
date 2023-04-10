import { useState } from "react";
import style from './Form.module.css'

const validate = (userData, setErrors, errors) => {
    if(!userData.username) setErrors({...errors, username: 'Debes ingresar un user'})
    else { 
        if(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3}$/.test(userData.username)) 
        setErrors ({...errors, username:''});
        else setErrors ({...errors, username:'User invalido, ingresar email'});
    }
}

const Form = () => {

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState ({ username: '', password: '' })

    const handleChange = (event) => {
        const propiedad = event.target.name;
        const valor= event.target.value;

        setUserData({...userData, [propiedad]: valor})
        validate({...userData, [propiedad]: valor}, setErrors, errors);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        alert('Login exitoso')
    };

    return( 
        <form onSubmit={submitHandler}>
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

        <button type="submit">Send</button>
    </form>
    )
}
 export default Form;