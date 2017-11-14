import React, { Component } from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Chance from 'chance'
import BugList from './BugList.js'
import './App.css';
import './../node_modules/bulma/css/bulma.css'

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

    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.saveBug = this.saveBug.bind(this)
  }

  handleChange (e) {
    const state = this.state.bug
    state[e.target.name] = e.target.value

    this.setState(state)
  }

  saveBug (e) {
    e.preventDefault()

    console.log(this.state.bug);

    this.setState(function(state) {
      // console.log(state.bugs);
      state.bugs.push(state.bug)
    })

    localStorage.setItem('bugs', JSON.stringify(this.state.bugs))

    this.setState({
      bug: {
        description : '',
        severity : '',
        assignedTo : '',
      }
    })

    alert("Berhasil Tambah")
  }

  handleDelete (id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let remainingBugs = bugs.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem('bugs', JSON.stringify(remainingBugs))
    // window.location.reload()
  }

  setStatusClosed (id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let updatedBugs = bugs.map((item) => {
      if (item.id === id)
        item.status = 'Close'
      return item
    })

    localStorage.setItem('bugs', JSON.stringify(updatedBugs))
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
                <span className="select">
                  <select id="severity" name="severity" value={severity} onChange={this.handleChange}>
                    <option value="">Please Select Severity</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </span>
                <label className="label" for="">Assigned To</label>
                <p className="control">
                  <input className="assignedTo" name="assignedTo" type="text" id="assignedTo" placeholder="Enter responsible..." value={assignedTo} onChange={this.handleChange} />
                </p> <br />
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
            <BugList bugs={this.state.bugs} delete={this.handleDelete} status={this.setStatusClosed} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
