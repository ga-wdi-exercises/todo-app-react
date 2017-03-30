                // <!-- // ###########################################
                // // 201703292130L   EL MIERCOLES   JAY -->
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './App.js';

                // GIRO:  list is a js object, w keys title, stillTodos, completedTodos
                // that have values that are respectively of type string, array, array
                // NATs APPROACH DIFFERENT ONLY IN THE NUMBER & TYPES OF keys
                // {content: <string>, isBeingEdited: <boolean>, isComplete: <boolean>}`,
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
