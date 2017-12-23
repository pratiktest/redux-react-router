import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);



// -------------------------------TEST IF REDUX WORKS WITHOUT UI --------------------------------
import { createStore } from 'redux'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter
} from './actions'

import todoApp from './reducers'

let store = createStore(todoApp)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))

// Stop listening to state updates
unsubscribe()
