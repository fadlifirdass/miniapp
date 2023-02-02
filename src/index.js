import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './frontend/loginform/login';
import Home from './frontend/containers/Home';
import WillUnM from './frontend/containers/WillUnMount';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './frontend/redux/reducer'
import List from './frontend/containers/list';
import Penerapanaxious from './frontend/containers/penerapanaxious';




const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path='/home/:userId' element={<Home/>}/>
      <Route path="/WillUnMount" element={<WillUnM/>}/>
      <Route path="/https" element={<Penerapanaxious/>}/>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
