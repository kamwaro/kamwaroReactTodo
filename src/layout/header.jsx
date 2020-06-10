import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h3>Kamwaro TodoList</h3>
      </header>
    );
  }
}

const headerStyle = {
  padding: '10px',
  backgroundColor: 'rgb(28,117,189)',
  fontFamily: 'Roboto, sans-serif',
  color: '#fff',
  textAlign: 'center',
};

export default Header;
