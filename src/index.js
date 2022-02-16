
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegContext from './contexts/context';

const Main = () => {
  const [register, setReg] = useState(false)
  return (
    <RegContext.Provider value = {{register, setReg}}>
      <App/>
    </RegContext.Provider>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
