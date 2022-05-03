import is from 'is_js'
import axios from "axios"
import { useDispatch } from "react-redux"


const Reg = ({setReg,emailVal, passVal, nameVal}) => {

    const dispatch = useDispatch()

    const regUsr = async (e) => {
        e.preventDefault()
        const data = {name: nameVal.value, email: emailVal.value, password: passVal.value}

        
        if(is.email(emailVal.value) && passVal.value.length >= 8 && nameVal.value.length > 0) {
            try {
                await axios.post('http://localhost:5000/api/reguser', data)
                setReg(false);
                localStorage.setItem("ISLOGGED", JSON.stringify(data))
                dispatch({type: 'SET_LOG', payload: data})
            } catch (e) {
                alert(e.response.data.text)
            }
        } else {
            alert('No')
        }

    }

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