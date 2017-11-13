import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './style.css'
import Footer from './Footer'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
