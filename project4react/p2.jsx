import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header/header"
import States from './components/states/States';

ReactDOM.render(
  <div>
    <div>
    <Header/>
    </div>
    <States/>
  </div>,
  document.getElementById('reactapp'),
);
