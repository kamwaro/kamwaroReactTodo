import React, { Component } from 'react';
import TodoItem from './todoItem';

class Todos extends Component {
  render() {
    return (
      <ul
        style={{
          listStyle: 'none',
          backgroundColor: 'rgb(242,241,241)',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        {this.props.todos.map((todoObject) => {
          return (
            <li key={todoObject.id}>
              <TodoItem
                todos={todoObject}
                task={todoObject.todo}
                taskChange={this.props.taskChange}
                onDelete={this.props.onDelete}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Todos;
