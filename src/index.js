import React from 'react';
import ReactDOM from 'react-dom';
import List from './App.js';

const list = {
  title: "Chores",
  todos: [
    "Laundry",
    "Mow Lawn",
    "Fix Shower",
    "Clean House",
    "Find Lawyer"
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
