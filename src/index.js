                            // <!-- // ###########################################
                            // // 201703292130L   EL MIERCOLES   JAY -->
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './App.js';

const list = {
  title:          "Things I Need To do",
  stillTodos:   [ "Plan Capstone project", "Finish Capstone project", "Brush up resume", "Schedule interviews" ]
  ,
  completedTodos: [ "Finish last homework"
  ]
};

ReactDOM.render(
  <   TodoList
        title={list.title}
        stillTodos={list.stillTodos}
        completedTodos={list.completedTodos}
  />
  ,
  document.getElementById('root')
);
