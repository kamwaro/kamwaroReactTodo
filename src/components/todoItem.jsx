import React, { Component } from 'react';

class TodoItem extends Component {
  state = {};

  pStyle() {
    return {
      padding: '5px 10px',
      textDecoration:
        this.props.todos.completed === true ? 'line-through' : 'none',
    };
  }

  render() {
    return (
      <div>
        <p style={todostyle}>
          <input
            type='checkBox'
            onChange={() => this.props.taskChange(this.props.todos.id)}
          />
          <span style={this.pStyle()}> {this.props.task}</span>

          <button
            style={btnStyle}
            onClick={() => this.props.onDelete(this.props.todos.id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

const todostyle = {
  marginBottom: '.5em',
  borderBottom: '1px #000 dotted',
  padding: '14px',
};

const btnStyle = {
  border: '2px #000 solid',
  borderRadius: '50%',
  backgroundColor: 'rgb(238,75,74)',
  padding: '5px 8px',
  float: 'right',
  color: '#fff',
};

export default TodoItem;
