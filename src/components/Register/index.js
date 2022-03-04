import React from "react"
import useInput from "../../hooks/HookInput"
import "./styles.scss"




const Register = ({setReg}) => {


    const nameVal = useInput(''),
    passVal = useInput(''),
    emailVal = useInput('')

    const regUsr = async (e) => {
        const data = {name: nameVal, email: emailVal, password: passVal}
        e.preventDefault()
        await fetch('http://localhost:5000/users', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(() => {setReg(false); localStorage.setItem("ISLOGGED", true)})
        .catch(() => {console.log('fail')})
        
    }

    return (
        <div className="reg__popup" onClick={() => {setReg(false)}}>
            <div className="reg__popup__menu" onClick={(e)=>{e.stopPropagation()}}>
                <div className="reg__popup__menu-item">
                    <form onSubmit={(e) => {regUsr(e)}}>
                        <label>Email</label>
                        <input value={emailVal.value} onChange={emailVal.onChange} type="email" className="reg__popup__menu__inp" />
                        <label>Password</label>
                        <input value={passVal.value} onChange={passVal.onChange} type="password" className="reg__popup__menu__inp" />
                        <label>Name</label>
                        <input value={nameVal.value} onChange={nameVal.onChange} type="text" className="reg__popup__menu__inp" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register