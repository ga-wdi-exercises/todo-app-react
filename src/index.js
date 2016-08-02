// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './App';
import './index.css'

const todo = {
  title: "Adina's todos",
  items: ["Todo 1", "Todo 2", "Todo 3", "Todo 4", "Todo 5"]
}

ReactDOM.render(
  <Todo
    title={todo.title}
    items={todo.items}/>,
    document.getElementById('root')
);
