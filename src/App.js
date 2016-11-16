import React, { Component } from 'react'
import Todo from './Todo'

class App extends Component {
  render() {
    return(
      <container>
        <header>
          <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container-fluid">
              <p className="navbar-text gaDisplayFont">React To-Do Demo</p>
              <p className="navbar-text navbar-right navbar-last">Signed in as <a href="#" className="navbar-link"> Guest </a> <span className="glyphicon glyphicon-user"></span></p>
            </div>
          </nav>
        </header>

        <Todo />

        <footer>
          <div className="footer-copyright">
            <div className="container">
              <p>Made with <span className="glyphicon glyphicon-heart"></span> by <a href="https://generalassemb.ly">GA WDI 10</a><span className="gaLogo"></span> in Washington, D.C.</p>
            </div>
          </div>
        </footer>
      </container>
    )
  }
}

export default App
