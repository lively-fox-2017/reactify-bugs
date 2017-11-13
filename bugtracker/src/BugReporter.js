import React, { Component } from 'react';

class BugReporter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      severity: 'low',
      assignedTo: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.descriptionCatcher = this.descriptionCatcher.bind(this);
    this.assignedToCatcher = this.assignedToCatcher.bind(this);
    this.severityCatcher = this.severityCatcher.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const bug = {
      id: Math.random()*999999999,
      description: this.state.description,
      severity: this.state.severity,
      assignedTo: this.state.assignedTo,
      status: 'Open',
    }

    let bugs = []
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(bug)
    localStorage.setItem('bugs', JSON.stringify(bugs))

    this.setState({ description: '' });
    this.setState({ assignedTo: '' });
    this.setState({ severity: 'low' });
    this.props.updateTask();
  }

  descriptionCatcher(event) {
    this.setState({ description: event.target.value });
  }

  assignedToCatcher(event) {
    this.setState({ assignedTo: event.target.value })
  }

  severityCatcher(event) {
    this.setState({ severity: event.target.value })
  }

  render() {
    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form action="" id="bugInputForm">
            <label className="label" htmlFor="">Description</label>
            <p className="control">
              <input className="input" value={this.state.description}  onChange={this.descriptionCatcher} type="text" id="description" placeholder="Describe a bug..."/>
            </p>
            <label className="label" htmlFor="">Severity</label>
            <p className="control">
              <span className="select">
                <select value={this.state.severity} onChange={this.severityCatcher} id="severity" name="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label" htmlFor="">Assigned To</label>
            <p className="control">
              <input className="input" value={this.state.assignedTo} onChange={this.assignedToCatcher} type="text" id="assignedTo" placeholder="Enter responsible..."/>
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button onClick={this.handleClick} className="button is-warning">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default BugReporter;
