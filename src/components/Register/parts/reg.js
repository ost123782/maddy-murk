const Reg = ({regUsr, emailVal, passVal, nameVal}) => {
    return (
        <div className="reg__popup__menu-item">
        <form onSubmit={(e) => {regUsr(e)}}>
            <h1>Register</h1>
            <label>Email</label>
            <input value={emailVal.value} onChange={emailVal.onChange} type="email" className="reg__popup__menu__inp" />
            <label>Password</label>
            <input value={passVal.value} onChange={passVal.onChange} type="password" className="reg__popup__menu__inp" />
            <label>Name</label>
            <input value={nameVal.value} onChange={nameVal.onChange} type="text" className="reg__popup__menu__inp" />
            <button type="submit">Register</button>
        </form>
    </div>
    )
}

export default Reg