import React from 'react'
import Chance from 'chance'

class BugForm extends React.Component {
  constructor () {
    super()
    this.state = {
      description: '',
      severity: '',
      assignedTo: ''
    }
    this.saveBug = this.saveBug.bind(this)
  }
  saveBug (e) {
    e.preventDefault()
    console.log(this.description.value + 'b')
    let chance = new Chance()
    const bug = {
      id: chance.guid(),
      description: this.description.value,
      severity: this.severity.value,
      assignedTo: this.assignedTo.value,
      status: 'Open'
    }
    this.props.addData(bug)
    this.description.value = ''
    this.severity.value = 'low'
    this.assignedTo.value = ''
  }
  render() {
    return (
    <div>
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form action="" id="bugInputForm" onSubmit={this.saveBug}>
            <label className="label">Description</label>
            <p className="control">
              <input className="input" type="text" id="description" placeholder="Describe a bug..." ref={val => this.description =  val}/>
            </p>
            <label className="label">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity" ref={val => this.severity =  val}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." ref={val => this.assignedTo =  val}/>
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
    )
  }
}

export default BugForm
