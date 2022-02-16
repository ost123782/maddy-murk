import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import {useContext} from 'react'
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/Home/About';
import RegContext from './contexts/context';
import Register from './components/Register';

function App() {
  const {setReg, register} = useContext(RegContext)


  return (
    <>
      
      <BrowserRouter>
      <Header setReg={setReg}  reg = {register}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      {register ? <Register/> : null}
      </BrowserRouter>
    </>
  );
}

export default App;
