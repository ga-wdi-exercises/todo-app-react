import React from 'react';
 import ReactDOM from 'react-dom';
 import Todo from './App';
 import './index.css';

 var todos = {
   items: [
   "Finalize Resume",
   "Decide on idea for Project 4",
   "Complete Portfolio"
 ]}
 
 ReactDOM.render(
   <Todo items={todos.items}/>,
   document.getElementById('root')
 );
