import React, { Component } from 'react';
import BugReporter from './BugReporter';
import Tasks from './Tasks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>

        <BugReporter/>

        <Tasks/>

      </div>
    );
  }
}

export default App;
