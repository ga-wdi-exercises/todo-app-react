import React from 'react'
import ReactDOM from 'react-dom'

class GrandParent extends React.Component {
  listen(sound){
    console.log(sound)
  }
  render(){
    return <div>
      <Parent listen={sound => this.listen(sound) }/>
    </div>
  }
}
class Parent extends React.Component {

  render(){
    return <div>
      <Child hear={ sound => this.props.listen(sound) }/>
    </div>
  }
}

class Child extends React.Component {

  render(){
    this.props.hear("meow")
    return <div></div>
  }
}

ReactDOM.render(
  <GrandParent />,
  document.getElementById('root')
)
