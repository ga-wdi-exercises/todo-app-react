import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './App';
import './index.css';

const todo = {
  task: "Wash the car"
}
ReactDOM.render(
  <Todo
    task={todo.task} />,
  document.getElementById('root')
)
