import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header'
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
