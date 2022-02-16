import React from "react"
import { Link } from "react-router-dom"
import'./styles.scss'


const Header = ({setReg, reg}) => {

    
    
    return (
        <header className="header">
            <nav className="header__block">
                <h1 className="header__block-item">Maddy Murk</h1>
                <span className="header__block-item">Главная</span>
                <span className="header__block-item">Канал на Youtube</span>
                <Link to='/about' className="header__block-item">О сайте</Link>
            </nav>
            <nav className="header__block">
                <button onClick={()  => {setReg(true)}}  className="header__block-btn">Вход/Регистрация</button>
            </nav>
        </header>
    )
}
export default Header