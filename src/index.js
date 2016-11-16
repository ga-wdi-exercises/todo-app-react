// Developer TODO: add application entry point

import React from 'react';
import ReactDOM from 'react-dom';
import Todos  from './Todos';


var todoItems = ["First Todo","Second Todo", "Third Todo"]

ReactDOM.render(
  < Todos listItems={todoItems}/>,
  document.getElementById('root')
);
