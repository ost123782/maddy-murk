const Log = ({logUsr, emailVal, passVal}) => {
    return (
        <div className="reg__popup__menu-item">
                    <form onSubmit={(e) => logUsr(e)}>
                        <h1>Login</h1>
                        <label>Email</label>
                        <input value={emailVal.value} onChange={emailVal.onChange} type="email" className="reg__popup__menu__inp" />
                        <label>Password</label>
                        <input value={passVal.value} onChange={passVal.onChange} type="password" className="reg__popup__menu__inp" />
                        <button type='submit'>Login</button>
                    </form>
                </div>
    )
}

export default Log