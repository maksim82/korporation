import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Login.scss';

function Login() {
    const seePassword = useRef(null);
    const [user, setUser] = useState({
        name: "",
        password: "",
        check: false,
        toogle: false,
        toogleEye: faEye 
    });

    const changeValue = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const sendForm = async (user) => {
        const res = await fetch("http://localhost:5000/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

        const result = await res.json();
        console.log(result); // результат на бэк
    };

    const submitValue = e => {
        e.preventDefault();
        sendForm({name, password});
    };

    const handleChange = () => { 
        if (toogle) {
            seePassword.current.type = 'password';
            setUser({
                ...user,
                toogleEye: faEye,
                toogle: !user.toogle
            });        
        } else {
            seePassword.current.type = 'text';
            setUser({
                ...user,
                toogleEye: faEyeSlash,
                toogle: !user.toogle
            });      
        }
    };

    const {name, password, check, toogle, toogleEye} = user;

    return (
        <section>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="box">
                <div className="square" style={{"--count": 0}}></div>
                <div className="square" style={{"--count": 1}}></div>
                <div className="square" style={{"--count": 2}}></div>
                <div className="square" style={{"--count": 3}}></div>
                <div className="square" style={{"--count": 4}}></div>
                <div className="container">
                    <div className="form">
                        <h2>Авторизация</h2>
                        <form>
                            <div className="inputBox" >
                                <input type="text" placeholder="Логин" value={name} onChange={changeValue} name="name" />
                            </div>
                            <div className="inputBox" >
                                <input type="password" placeholder="Пароль" value={password} onChange={changeValue} name="password" ref={seePassword} />
                                <FontAwesomeIcon icon={toogleEye} className="seePassword" onClick={handleChange} />
                            </div>
                            <label className="remeber">
                                <input type="checkbox" value={check} onClick={changeValue} /> Remember Me
                            </label>
                            <div className="inputBox" >
                                <input type="submit" value="Вход" onClick={submitValue} />
                            </div>
                            <p className="forget">Нет аккаунта ? &nbsp;
                                <Link to="/register">Зарегистрироваться</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;