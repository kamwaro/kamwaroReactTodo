import React, { Component } from 'react';

class FormTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
    console.log(this.state.title);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
    console.log('This is me!!');
  };

  render() {
    return (
      <React.Fragment>
        <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
          <input
            style={{ flex: '10', padding: '10px' }}
            type='text'
            placeholder='Enter Todo'
            name=''
            id=''
            onChange={this.onChange}
          />
          <input
            style={{ flex: '1', padding: '10px' }}
            type='submit'
            value='Submit'
          />
        </form>
      </React.Fragment>
    );
  }
}

export default FormTodo;
