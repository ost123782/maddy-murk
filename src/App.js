import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/Home/About';
import Register from './components/Register';
import PostPage from './pages/PostPage';
import {useDispatch, useSelector} from "react-redux";
import CreatePage from "./pages/CreatePage";
import { SET_REG } from './store/actions/actionCreator';

function App() {

  const register = useSelector(state => state.register)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  const setReg = (val) => {
      dispatch({type: SET_REG, payload: val})
  }

  return (
    <>
      
      <BrowserRouter>
      <Header setReg={setReg}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          {isLogged ? <Route path='/create' element={<CreatePage/>} /> : null}
          <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
      {register ? <Register setReg={setReg}/> : null}
      </BrowserRouter>
    </>
  );
}

export default App;
