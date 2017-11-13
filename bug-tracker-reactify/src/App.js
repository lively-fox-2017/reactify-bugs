import React, { Component } from 'react';
import Chance from 'chance';
import BugItem from './BugItem';
import './../node_modules/bulma/css/bulma.css';
import './App.css';

const chance = new Chance()

class App extends Component {
  render() {
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    let bugList = []

    bugs.forEach(bug => {
      bugList.push(<BugItem bug={bug} key={bug.id}/>)
    })

    const saveBug = (e) => {
      e.preventDefault()
      const bug = {
        id: chance.guid(),
        description: document.getElementById('description').value,
        severity: document.getElementById('severity').value,
        assignedTo: document.getElementById('assignedTo').value,
        status: 'Open'
      }

      let bugs = []
      if (localStorage.getItem('bugs') !== null) {
        bugs = JSON.parse(localStorage.getItem('bugs'))
      }
      bugs.push(bug)
      localStorage.setItem('bugs', JSON.stringify(bugs))

      document.getElementById('bugInputForm').reset()
      window.location.reload()
    }
    return (
      <div>
        <div className="container">
          <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
          <section className="hero is-medium">
            <div className="hero-body">
              <h2 className="title">Add New Bug Report:</h2>
              <form action="" id="bugInputForm">
                <label className="label">Description</label>
                <p className="control">
                  <input className="input" type="text" id="description" placeholder="Describe a bug..."/>
                </p>
                <label className="label">Severity</label>
                <p className="control">
                  <span className="select">
                    <select id="severity" name="severity">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </span>
                </p>
                <label className="label">Assigned To</label>
                <p className="control">
                  <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..."/>
                </p>
                <div className="control is-grouped">
                  <p className="control">
                    <button className="button is-warning" onClick={saveBug}>Submit</button>
                  </p>
                </div>
              </form>
            </div>
          </section>

          <hr />

          <div className="columns">
            <div className="column is-medium" id="listBugs">
              {bugList}
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                &copy; HACKTIV8
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
