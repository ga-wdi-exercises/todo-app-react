// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo';

const todo = {
   name: "gary",
   body: "buy more fiji",
   }
ReactDOM.render(
  <ToDo
  />,
  document.getElementById('root')
);
