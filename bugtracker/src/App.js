import React, { Component } from 'react';
import BugReporter from './BugReporter';
import Tasks from './Tasks';
import Footer from './Footer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.updateAvailable = this.updateAvailable.bind(this);
  }

  updateAvailable() {
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App container">
        <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>

        <BugReporter updateTask={this.updateAvailable}/>

        <Tasks/>

        <Footer/>

      </div>
    );
  }
}

export default App;
