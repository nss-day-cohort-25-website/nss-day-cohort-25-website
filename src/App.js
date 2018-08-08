import React, { Component } from 'react';
import './App.css';
import NavBar from './nav/NavBar';
import GroupTech from './groupTech/groupTech'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <GroupTech/>
      </div>
    );
  }
}

export default App;
