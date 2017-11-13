import React, { Component } from 'react';
import './App.css';
import Chance from 'chance'
let chance = new Chance()
class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.fetchBugs()
  }
  fetchBugs(){
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    let listBugsElement = []
    for(let i = 0; i < bugs.length; i++) {
      let id = bugs[i].id
      let desc = bugs[i].description
      let severity = bugs[i].severity
      let assignedTo = bugs[i].assignedTo
      let status = bugs[i].status
      
      listBugsElement.push(`
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
          BugId: ${id}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            ${desc}
            <span class="tag is-info">${severity}</span>
            <p>Assigned To: ${assignedTo}</p>
          </div>
          <br>
          <small class="tag is-primary">${status}</small>
        </div>
        <footer class="card-footer">
          <a onclick="setStatusClosed('${id}')" class="is-warning card-footer-item">Close</a>
          <a class="card-footer-item" onclick="deleteBug('${id}')">Delete</a>
        </footer>
      </div>
      <br>
    `)
    }
  }
  deleteBug(id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))
    let remainingBugs = bugs.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem('bugs', JSON.stringify(remainingBugs))
    this.fetchBugs()
  }
  saveBug(e) {
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
    this.fetchBugs()
    e.preventDefault()
  }
  setStatusClosed(id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))
  
    let updatedBugs = bugs.map((item) => {
      if (item.id === id)
        item.status = 'Close'
      return item
    })
  
    localStorage.setItem('bugs', JSON.stringify(updatedBugs))
    this.fetchBugs()
  }
  render() {
    return (
      <div className="App">
          <div class="container">
            <h1 class="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
            <section class="hero is-medium">
              <div class="hero-body">
                <h2 class="title">Add New Bug Report:</h2>
                <form action="" id="bugInputForm">
                <label class="label" for="">Description</label>
                  <p class="control">
                    <input class="input" type="text" id="description" placeholder="Describe a bug..." />
                  </p>
                  <label class="label" for="">Severity</label>
                  <p class="control">
                    <span class="select">
                      <select id="severity" name="severity">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </span>
                  </p>
                  <label class="label" for="">Assigned To</label>
                  <p class="control">
                    <input class="input" type="text" id="assignedTo" placeholder="Enter responsible..." />
                  </p>
                  <div class="control is-grouped">
                    <p class="control">
                      <button onClick="$this.saveBugs()" class="button is-warning">Submit</button>
                    </p>
                  </div>
                </form>
              </div>
            </section>
            <hr />
            <div class="columns">
              <div class="column is-medium" id="listBugs">{this.fetchBugs()}</div>
            </div>
            <footer class="footer">
              <div class="container">
                <div class="content has-text-centered">
                  <p>
                    &copy; HACKTIV8
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
    );
  }
}

export default App;
