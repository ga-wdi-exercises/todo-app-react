import React, {Component} from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import _ from 'lodash';

const todos = [
{
    task: 'Go shopping on Saturday.',
    isCompleted: false
},
{
    task: 'Teach Jesse how to Dance on Sunday.',
    isCompleted: true
},
{
    task: 'Meet grand mother on Monday.',
    isCompleted: false
},
{
    task: 'Read article on KHOI FISH on Tuesday.',
    isCompleted: false
},
{
    task: 'Go fishing on Wednesday.',
    isCompleted: true
}
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
          <div className="jumbotron">
            <div className="container">
                <h1 className="container text-center" >Todo App</h1>
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}

export default App
