import React, { useState } from "react"
import { Link } from "react-router-dom"
import'./styles.scss'
import {useDispatch, useSelector} from "react-redux"


const Header = ({setReg}) => {

    const isLog = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    const [isOpenBurger, changeBurger] = useState(false)

    const logOut = () => {

        localStorage.removeItem('ISLOGGED')
        dispatch({type: 'SET_LOG', payload: null})
    }

    const openOrCloseBurg = () => {
        return changeBurger(!isOpenBurger)
    }

    
    return (
        <header className="header">
            <nav className="header__block">
                <p onClick={() => {openOrCloseBurg()}}>Burger</p>
                <div className={`header__block__list ${isOpenBurger ? 'active' : null}`}>
                <h1 className="header__block__list-item">Кулинаные рецепты</h1>
                <Link to='/' className="header__block__list-item">Главная</Link>
                <Link to='/about' className="header__block__list-item">О  сайте</Link>
                {isLog ? <Link to={'/create'}>Создать публикацию</Link> : null}
                </div>
            </nav>
            <div className="header__buton-block">
                {!isLog ? <button onClick={() => setReg(true)} className="header__block-btn">Вход/Регистрация </button> : <><p>Hello, {isLog.name}</p> <button onClick={() => logOut()} className="header__block-btn">Выйти</button></> }
            </div>
        </header>
    )
}
export default Header