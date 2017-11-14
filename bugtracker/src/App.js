import React, { Component } from 'react';
// import logo from './logo.svg';
import Footer from './components/Footer'
import Header from './components/Header'
import AddForm from './components/AddForm'
import List from './components/List'
import './App.css';
import '../node_modules/bulma/css/bulma.css'


class App extends Component {
  render() {
    return (
    <div>
      <div className="container">
        <Header></Header>
        <AddForm></AddForm>
        <hr/>
        <List></List>
      </div>
      <Footer></Footer>
    </div>
    );
  }
}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
