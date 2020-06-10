import React, { Component } from 'react';
import Todos from './components/todos';
import Header from './layout/header';
import FormTodo from './components/form';

class App extends Component {
  state = {
    todos: [
      { id: 1, todo: 'Call Wife', completed: false },
      { id: 2, todo: 'Apply for Jobs', completed: false },
      { id: 3, todo: 'Be Grateful', completed: false },
      { id: 4, todo: 'Work a little bit harder!', completed: false },
    ],
  };

  taskChange = (id) => {
    let todos = [...this.state.todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos: todos });
  };

  addTodo = (title) => {
    console.log(title);
    let todos = [...this.state.todos];
    let todosLength = todos.length;
    const newTodoid = todos[todosLength - 1].id + 1;

    let newTodo = { id: newTodoid, todo: title, completed: false };
    console.log(newTodo);
    todos.push(newTodo);
    this.setState({ todos: todos });
  };

  onDelete = (id) => {
    let todos = [...this.state.todos].filter((todo) => todo.id !== id);

    this.setState({ todos: todos });
  };

  render() {
    console.log(this.state.todos);
    return (
      <React.Fragment>
        <Header />
        <FormTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          taskChange={this.taskChange}
          onDelete={this.onDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
