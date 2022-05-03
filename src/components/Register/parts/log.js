import axios from 'axios'
import {useDispatch} from 'react-redux'
import is from 'is_js'

const Log = ({setReg ,emailVal, passVal}) => {

    const dispatch = useDispatch()

    const logUsr = async (emailVal, passVal, e) => {
        const data = {email: emailVal.value, password: passVal.value}

        e.preventDefault()

        if(is.email(emailVal.value) && passVal.value.length >= 8){
        try{
            const response = await axios.post('http://localhost:5000/api/loguser', data)
            data.name = response.data.name
            setReg(false)
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
                    <form onSubmit={(e) => logUsr(emailVal, passVal, e)}>
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