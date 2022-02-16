import React from "react"
import "./styles.scss"

const Register = () => {
    return (
        <div className="reg__popup">
            <div className="reg__popup__menu">
                <input type="email" className="reg__popup__menu__inp" />
                <input type="password" className="reg__popup__menu__inp" />
            </div>
        </div>
    )
}

export default Register