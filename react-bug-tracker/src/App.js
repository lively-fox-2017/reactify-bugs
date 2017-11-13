import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './style.css'
import Footer from './Footer'
import Header from './Header'
import BugForm from './BugForm'
import BugList from './BugList'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header/>
          <BugForm/>
          <hr/>
          <BugList/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
