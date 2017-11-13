import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

// Components
import Header from './Header';
import BugTracker from './BugTracker';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header/>
          <BugTracker/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
