// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo';

const todo = {

   body: [
     "buy more fiji",
     "whoop the caps ass",
     "get milk"
  ]
 }
ReactDOM.render(
  <ToDo

  body={todo.body}
  />,
  document.getElementById('root')
);
