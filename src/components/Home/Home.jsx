import { faWarehouse, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Home.scss";
import Employee from '../Employee/Employee';

function Home() {
    const [item, setItem] = useState([
        {title: "Главная", link: "/", icon: faHouse, active: "active"},
        {title: "Сотрудники", link: "/", icon: faUser, active: ''},
        {title: "Склад", link: "/", icon: faWarehouse, active: ''}
    ]);

    const handleActive = index => {
        setItem(
            item.map((item, i) => {
                const active = index === i ? item.active = "active" : "";
                return {...item, active};
            })
        );
    };

    const list = item.map((item, index) => (
        <li className={`list ${item.active}`} key={index} onClick={() => handleActive(index)}>
            <Link to={item.link}>
                <span className="icons">
                    <FontAwesomeIcon icon={item.icon} color="white" className="icon" />
                </span>
                <span className="title">{item.title}</span>
            </Link>
        </li>
    ));

    return (
        <div className="body">
            <div className="navigation">
                <ul>
                    {list}
                </ul>
            </div> 
            <Employee />
        </div>
    )
}

export default Home;