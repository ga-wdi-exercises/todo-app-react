// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import List from './App.js';

const lists = [
            {title: "Things To Do", todos: ["Take out trash", "Make lunch", "Cure cancer", "Promote synergy"], completeTodos: ["Make America Great Again", "Feed pet llama"]},
            {title: "Make Mac and Cheese", todos: ["Put pasta in casserole dish", "Cover in cheese", "Set temperature to 450F", "Bake 30 minutes"], completeTodos: ["Boil water", "Cook pasta"]}
          ];

ReactDOM.render(
  <List title={lists.title}
  todos={lists.todos}
  completeTodos={lists.completeTodos} />,
  document.getElementById('root')
);
