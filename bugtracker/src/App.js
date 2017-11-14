import React, { Component } from 'react';
import { Container, Title } from 'reactbulma'
import BugForm from './BugForm'
import BugList from './BugList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Title>
          Bug Tracker <small>by HACKTIV8</small>
        </Title>
        <BugForm/>
        <hr />
        <BugList/>
      </Container>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
