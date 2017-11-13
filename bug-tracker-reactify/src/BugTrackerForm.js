import React, { Component } from 'react';
import Chance from 'chance';

const chance = new Chance();

class BugTrackerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      description: '',
      severity: 'low',
      assignedTo: '',
      status: 'Open'
    };

    this.createBug = this.createBug.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  resetState() {
    this.setState({
      description: '',
      severity: 'low',
      assignedTo: '',
      status: 'Open'
    });
  }

  createBug(event) {
    let newBug = this.state;
    let bugs = [];

    // Generate GUID
    newBug.id = chance.guid();

    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'));
    }

    bugs.push(newBug);
    localStorage.setItem('bugs', JSON.stringify(bugs));

    this.resetState();

    window.location.reload();

    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.createBug }>
          <h2 className="title">Add New Bug Report:</h2>
          <label className="label" htmlFor="">Description</label>
          <p className="control">
            <input className="input" type="text" name="description" placeholder="Describe a bug..." onChange={ this.handleInputChange }/>
          </p>
          <label className="label" htmlFor="">Severity</label>
          <p className="control">
            <span className="select">
              <select id="severity" name="severity" onChange={ this.handleInputChange }>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </span>
          </p>
          <label className="label" htmlFor="">Assigned To</label>
          <p className="control">
            <input className="input" type="text" name="assignedTo" placeholder="Enter responsible..." onChange={ this.handleInputChange }/>
          </p>
          <div className="control is-grouped">
            <p className="control">
              <button onClick={ this.createBug } className="button is-warning">Submit</button>
            </p>
          </div>
        </form>
      </div>
    );
  }

}

export default BugTrackerForm;
