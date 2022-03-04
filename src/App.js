import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import {useContext, useEffect, useState} from 'react'
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/Home/About';
import RegContext from './contexts/context';
import Register from './components/Register';

function App() {
  const {setReg, register} = useContext(RegContext)
  const [isLog, setLogin] = useState(false)

  useEffect(() => {
    const isLogged = localStorage.getItem('ISLOGGED')
    

    if(isLogged) {
      console.log('ISLOGGED')
      setLogin(true)
      
    }
    return
  }, [register])


  return (
    <>
      
      <BrowserRouter>
      <Header isLog = {isLog} setReg={setReg} setLogin={setLogin}  reg = {register}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      {register ? <Register setReg={setReg}/> : null}
      </BrowserRouter>
    </>
  );
}

export default App;
