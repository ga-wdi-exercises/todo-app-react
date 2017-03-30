// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './App';
import './index.css';

var todos = {
  items: [
  "Update GitHub Portfolio",
  "Project 4 ideas",
  "Vet appointments"
]}

ReactDOM.render(
  <Todo items={todos.items}/>,
  document.getElementById('root')
);
