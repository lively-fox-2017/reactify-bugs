import React, { Component } from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Chance from 'chance'
import './App.css';
// import 'bulma'

const chance = new Chance()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bugs: JSON.parse(localStorage.getItem('bugs')) || [],
      bug: {
        id: chance.guid(),
        description: '',
        severity: '',
        assignedTo: '',
        status: 'Open'
      }
    }
  }

  handleChange = (e) => {
    const state = this.state.bug
    state[e.target.name] = e.target.value

    this.setState(state)
  }

  saveBug = (e) => {
    e.preventDefault()

    console.log(this.state.bug);

    this.state.bugs.push(this.state.bug)

    localStorage.setItem('bugs', JSON.stringify(this.state.bugs))

    this.setState(this.state.bug.description = '')
    this.setState(this.state.bug.severity = '')
    this.setState(this.state.bug.assignedTo = '')

    alert("Berhasil Tambah")
  }

  render () {
    const { description, severity, assignedTo } = this.state.bug
    return (
      <div className="App">
        <Header />

        <div className="container">
          <section className="hero is-medium">
            <div className="hero-body">
              <h2 className="title">Add New Bug Report:</h2>

              <form id="bugInputForm" onSubmit={this.saveBug}>
                <label className="label" for="">Description</label>
                <p className="control">
                  <input className="description" name="description" type="text" id="description" placeholder="Describe a bug..." value={description} onChange={this.handleChange} />
                </p>
                <label className="label" for="">Severity</label>
                <p className="control">
                  <span className="select">
                    <select id="severity" name="severity" value={severity} onChange={this.handleChange}>
                      <option value="">Please Select Severity</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </span>
                </p>
                <label className="label" for="">Assigned To</label>
                <p className="control">
                  <input className="assignedTo" name="assignedTo" type="text" id="assignedTo" placeholder="Enter responsible..." value={assignedTo} onChange={this.handleChange} />
                </p>
                <div className="control is-grouped">
                  <p className="control">
                    <button className="button is-warning">Submit</button>
                  </p>
                </div>
              </form>
            </div>
          </section>

          <hr />

          <div className="columns">
            <div className="column is-medium" id="listBugs"></div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
