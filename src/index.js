// Developer TODO: add application entry point
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Todos from "./Todos.js"

const incompleted = [
  {name: "Laundry", content: "Throw some clothes into the washer." },
  {name: "Dishes", content: "Wash the dishes"}
]

ReactDOM.render(
  <Todos incompleted={incompleted}/>,
  document.getElementById("root")
)
