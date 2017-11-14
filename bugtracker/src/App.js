import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import BugForm from './BugForm.js'
import BugList from './BugList.js'
import Header from './Header.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <Header></Header>
          <BugForm></BugForm>
          <BugList></BugList>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
