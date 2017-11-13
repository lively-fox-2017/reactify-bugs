import React, { Component } from 'react'
import Chance from 'chance'
const chance = new Chance()

class BugForm extends Component {
  constructor (props) {
    super(props)
    this.handleBugAddition = this.handleBugAddition.bind(this)
  }

  handleBugAddition (e) {
    e.preventDefault()
    this.props.handleBugAddition({
      id: chance.guid(),
      description: this.description,
      severity: this.severity,
      user: this.user,
      status: 'Open'
    })
    this.description.value = ''
    this.severity.value = ''
    this.user.value = ''
  }

  render() {
    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form onSubmit={this.handleBugAddition}>
            <label className="label">Description</label>
            <p className="control">
              <input className="input" type="text" placeholder="Describe a bug..." ref={el => this.description = el} />
            </p>
            <label className="label">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity" ref={el => this.severity = el}>
                  <option selected disabled value=''>Select This</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." ref={el => this.user = el} />
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }

}

export default BugForm
