import React from 'react';
import style from './style.css'

const DevItem = ({dev}) => {
    return (
        <li className='dev-item'>
            <header>
            <img src="https://avatars0.githubusercontent.com/u/13820714?s=400&u=d4ffb18569dd5e508b62c33db89d093bf9246b19&v=4" alt=""/>
            <div className='user-info'>
                <strong>{ dev.github_username }</strong>
                <span>{ dev.techs }</span>
            </div>
            </header>
            <p>CTO na @TecGenius, apaixonado pela sua esposa e por Javascript</p>
            <a href="https://github.com/Edmundo92">Acessar perfil</a>
        </li>
    )
}

export default DevItem;