import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './App.css';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1  
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>COUNTER APP</h1>
       <div>
        {store.getState()}
       </div>
       <div>
        <button onClick={e => store.dispatch({ type: 'INCREMENT' })}>plus</button>
        <button onClick={e => store.dispatch({ type: 'DECREMENT' })}>minus</button>
        <button onClick={e => store.dispatch({ type: 'ZERO' })}>zero</button>
       </div>
      </header>
    </div>
  );
}


// module.exports = {App, store}
export {App , store};
// export store;
