import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './App.js';

const todo = {
  author: "Eva",
  tasks: [
    "Feed the Dog",
    "Pickup brother from the airport.",
    "Clean the kitchen"
  ]
}
ReactDOM.render(
  < Todo author={todo.author} tasks={todo.tasks} />,
  document.getElementById('root')
);
