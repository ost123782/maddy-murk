import React, { useState } from "react"
import useInput from "../../hooks/HookInput"
import axios from 'axios'
import "./styles.scss"
import {useDispatch} from "react-redux";
import Reg from "./parts/reg";
import Log from "./parts/log";




const Register = ({setReg}) => {

    const dispatch = useDispatch()


    const nameVal = useInput(''),
    passVal = useInput(''),
    emailVal = useInput(''),
    [regOrLog, setRegOrLog] = useState('reg')

    const regUsr = async (e) => {
        const data = {name: nameVal.value, email: emailVal.value, password: passVal.value}

        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/reguser', data)
            alert(response.data.text)
            setReg(false);
            localStorage.setItem("ISLOGGED", JSON.stringify(data))
            dispatch({type: 'SET_LOG', payload: data})
        } catch (e) {
            alert(e.response.data.text)
        }
        //     .then(() => {})
        // .catch((e) => {console.log(e.response.data.text)})
        
    }

    const logUsr = async (e) => {
        const data = {email: emailVal.value, password: passVal.value}

        e.preventDefault()

        try{
            const response = await axios.post('http://localhost:5000/api/loguser', data)
            data.name = response.data.name
            setReg(false)
            localStorage.setItem("ISLOGGED", JSON.stringify(data))
            dispatch({type: 'SET_LOG', payload: data})
        } catch (e) {
            alert(e.response.data.text)
        }
    }

    return (
        <div className="reg__popup" onClick={() => {setReg(false)}}>
            <div className="reg__popup__menu" onClick={(e)=>{e.stopPropagation()}}>
                { regOrLog === 'reg' ? <Reg regUsr={regUsr} passVal={passVal} nameVal={nameVal} emailVal={emailVal}/> :
                <Log logUsr={logUsr} emailVal={emailVal} passVal={passVal}/> }
                {regOrLog === 'reg' ? <p onClick={() => setRegOrLog('log')}>Login</p> : <p onClick={() => setRegOrLog('reg')}>Register</p>}
            </div>
        </div>
    )
}

export default Register