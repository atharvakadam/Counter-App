import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// const {App, store} = require('./App')
import {App, store} from './App';



const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
} 

renderApp()
store.subscribe(renderApp)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
