// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo';

const todo = {

   currentTask: [
     "buy more fiji",
     "whoop the caps ass",
     "get milk"
  ]
 }
ReactDOM.render(
  <ToDo

  currentTasks={todo.currentTasks}
  />,
  document.getElementById('root')
);
