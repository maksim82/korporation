import { Link } from 'react-router-dom';
import { useState } from 'react';

import "./Register.scss";

function Register() {
    const [user, setUser] = useState({
        name: "",
        password: "",
        secretKey: "",
        email: "",
        repeatPassword: ""
    });

    const changeValue = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    //Следует поменять http://localhost:5000/api на тот что на беке. Также перед отправкой на бек следует запустить 
    //сервер иначе функция ниже не сработает
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
        sendForm({name, password, email, secretKey, repeatPassword});
    };

    const {name, password, email, secretKey, repeatPassword} = user;
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
                        <h2>Регистрация</h2>
                        <form>
                            <div className="inputBox">
                                <input type="text" placeholder="Логин" value={name} onChange={changeValue} name="name" />
                            </div>
                            <div className="inputBox">
                                <input type="email" placeholder="Email" value={email} onChange={changeValue} name="email" />
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Пароль" value={password} onChange={changeValue} name="password" />
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Повторение пароля" value={repeatPassword} onChange={changeValue} name="repeatPassword" />
                            </div>
                            <div className="inputBox">
                                <input type="text" placeholder="Секретное слово" value={secretKey} onChange={changeValue} name="secretKey" />
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Регистрация" onClick={submitValue} />
                            </div>
                            <p className="forget">
                                Уже есть аккаунт ? &nbsp;
                                <Link to="/login">Вход</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;