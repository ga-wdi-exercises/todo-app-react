// Developer TODO: add application entry point
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import NewToDo from './NewToDo.js'

const todo = {
  items:["Go to gym", "finish portfolio"]
}


ReactDOM.render(
  <App
  todos={[todo.items]}
  />,
  document.getElementById('root')
)
