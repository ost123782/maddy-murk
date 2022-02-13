import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/Home/About';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
