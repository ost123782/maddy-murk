import React from "react"

import'./styles.scss'

const Header = () => {
    return (
        <header className="header">
            <nav className="header__block">
                <h1 className="header__block-item">Maddy Murk</h1>
                <span className="header__block-item">Главная</span>
                <span  className="header__block-item">Канал на Youtube</span>
                <span className="header__block-item">О сайте</span>
            </nav>
            <nav className="header__block">
                <span className="header__block-item">Вход/Регистрация</span>
            </nav>
        </header>
    )
}
export default Header