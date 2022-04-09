import React from "react"
import { Link } from "react-router-dom"
import'./styles.scss'
import {useDispatch, useSelector} from "react-redux"


const Header = ({setReg}) => {

    const isLog = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    const logOut = () => {

        localStorage.removeItem('ISLOGGED')
        dispatch({type: 'SET_LOG', payload: null})
    }

    
    return (
        <header className="header">
            <nav className="header__block">
                <h1 className="header__block-item">Кулинаные рецепты</h1>
                <Link to='/' className="header__block-item">Главная</Link>
                <Link to='/about' className="header__block-item">О  сайте</Link>
                {isLog ? <Link to={'/create'}>Создать публикацию</Link> : null}
            </nav>
            <nav className="header__block">
                {!isLog ? <button onClick={() => setReg(true)} className="header__block-btn">Вход/Регистрация </button> : <><p>Hello, {isLog.name}</p> <button onClick={() => logOut()} className="header__block-btn">Выйти</button></> }
            </nav>
        </header>
    )
}
export default Header