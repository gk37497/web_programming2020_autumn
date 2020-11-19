import React from 'react';
import ReactDOM from 'react-dom';
import Dynamic from "./components/dynamic/dynamic";
import Header from './components/header/header';

ReactDOM.render(
  <div>
    <Header/>
    <Dynamic/>
  </div>,
  document.getElementById('reactapp'),
);
