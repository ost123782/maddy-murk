import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/Home/About';
import Register from './components/Register';
import {useDispatch, useSelector} from "react-redux";
import CreatePage from "./pages/CreatePage";

function App() {

  const register = useSelector(state => state.register)
  const dispatch = useDispatch()
  const setReg = (val) => {
      dispatch({type: 'SET_REG', payload: val})
  }

  return (
    <>
      
      <BrowserRouter>
      <Header setReg={setReg}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/create' element={<CreatePage/>} />
        </Routes>
      {register ? <Register setReg={setReg}/> : null}
      </BrowserRouter>
    </>
  );
}

export default App;
