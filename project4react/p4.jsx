import React from 'react';
import ReactDOM from 'react-dom';
import Switch from "./components/switch/switch";
import Header from './components/header/header';
import './styles/main.css';


ReactDOM.render(
  <div>
    <Header/>
    <Switch/>
  </div>,
  document.getElementById('reactapp'),
);
