// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import List from './App.js';

const list = {
  title: "Things To Do",
  todos: [
    "Take out trash",
    "Make lunch",
    "Cure cancer",
    "Promote synergy"
  ],
  completeTodos: [
    "Make Todo App"
  ]
};

ReactDOM.render(
  <List title={list.title}
  todos={list.todos}
  completeTodos={list.completeTodos} />,
  document.getElementById('root')
);
