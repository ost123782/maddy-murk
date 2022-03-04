import React from "react"
import { Link } from "react-router-dom"
import'./styles.scss'


const Header = ({setReg, isLog, setLogin}) => {

    const logOut = () => {
        localStorage.removeItem('ISLOGGED')
        setLogin(false)
    }
    
    return (
        <header className="header">
            <nav className="header__block">
                <h1 className="header__block-item">Maddy Murk</h1>
                <Link to='/' className="header__block-item">Главная</Link>
                <Link to='/about' className="header__block-item">О сайте</Link>
            </nav>
            <nav className="header__block">
                {!isLog ? <button onClick={()  => {setReg(true)}}  className="header__block-btn">Вход/Регистрация</button> : <button className="header__block-btn" onClick={() => {logOut()}}>Выйти</button>}
            </nav>
        </header>
    )
}
export default Header