// Developer TODO: add application entry point

import React from 'react';
import ReactDOM from 'react-dom';
import List from './App.js';
import './index.css';


const list1 = {
  title: "List 1",
  todos: ["todo 1", "todo 2"]
}

ReactDOM.render(
  <List
  title={list1.title}
  todos={list1.todos}
  />,
  document.getElementById('root')
)
