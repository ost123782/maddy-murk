import React, { useState } from "react"
import useInput from "../../hooks/HookInput"
import "./styles.scss"
import Reg from "./parts/reg";
import Log from "./parts/log";




const Register = ({setReg}) => {

    const nameVal = useInput(''),
    passVal = useInput(''),
    emailVal = useInput(''),
    [regOrLog, setRegOrLog] = useState('reg')

    return (
        <div className="reg__popup" onClick={() => {setReg(false)}}>
            <div className="reg__popup__menu" onClick={(e)=>{e.stopPropagation()}}>
                { regOrLog === 'reg' ? <Reg setReg={setReg} passVal={passVal} nameVal={nameVal} emailVal={emailVal}/> :
                <Log setReg={setReg} emailVal={emailVal} passVal={passVal}/> }
                {regOrLog === 'reg' ? <p onClick={() => setRegOrLog('log')}>Login</p> : <p onClick={() => setRegOrLog('reg')}>Register</p>}
            </div>
        </div>
    )
}

export default Register