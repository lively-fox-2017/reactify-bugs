import React, { Component } from "react";
import Chance from "chance";

class Addform extends Component {
  render() {
    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form action="" id="bugInputform">
            <label className="label" htmlFor="">
              Description
            </label>
            <p className="control">
              <input
                className="input"
                type="text"
                id="description"
                placeholder="Describe a bug..."
              />
            </p>
            <label className="label" htmlFor="">
              Severity
            </label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label" htmlFor="">
              Assigned To
            </label>
            <p className="control">
              <input
                className="input"
                type="text"
                id="assignedTo"
                placeholder="Enter responsible..."
              />
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button
                  onClick={this.handleSubmit}
                  className="button is-warning"
                >
                  Submit
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const bug = {
      id: new Chance().guid(),
      description: document.getElementById('description').value,
      severity: document.getElementById('severity').value,
      assignedTo: document.getElementById('assignedTo').value,
      status: 'Open'
    };
      
      let bugs = []
    if (localStorage.getItem('bugs') !== null) {
        bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(bug)
    localStorage.setItem('bugs', JSON.stringify(bugs))
    
    document.getElementById('bugInputform').reset()
    
    fetchBugs()
  }
}

let fetchBugs = () => {
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
  let listBugsElement = document.getElementById('listBugs')
  
  listBugsElement.innerHTML = ''
  
  for (let i = 0; i < bugs.length; i++) {
    let id = bugs[i].id
    let desc = bugs[i].description
    let severity = bugs[i].severity
    let assignedTo = bugs[i].assignedTo
    let status = bugs[i].status

    listBugsElement.innerHTML += `<div class="card">
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
     <br>`
  }
}
  
export default Addform;
