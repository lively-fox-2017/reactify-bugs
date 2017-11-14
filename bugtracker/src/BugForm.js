import React, { Component } from 'react';
import Chance from 'chance';

const chance = new Chance();

class BugForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:'',
      description: '',
      severity: 'Low',
      assignedTo: '',
      status: 'Open'
    }
    this.createBug = this.createBug.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  resetForm(){
    this.setState = {
      id:'',
      description: '',
      severity: 'Low',
      assignedTo: '',
      status: 'Open'
    }
  }
  handleInputChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    })
  }
  createBug(event){
    let newBug=this.state
    let bugs=[]
    newBug.id = chance.guid();
    if (localStorage.getItem('bugs')) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(newBug);
    localStorage.setItem('bugs', JSON.stringify(bugs));
    this.resetForm();
    window.location.reload();
    event.preventDefault();
  }
  render () {
    return (
      <div className="">
        <form action="" id="bugInputForm">
          <label className="label">Description</label>
          <p className="control">
            <input onChange={ this.handleInputChange} className="input" type="text" name="description" placeholder="Describe a bug..."/>
          </p>
          <label className="label">Severity</label>
          <p className="control">
            <span onChange={ this.handleInputChange} className="select">
              <select name="severity">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </span>
          </p>
          <label className="label">Assigned To</label>
          <p className="control">
            <input onChange={ this.handleInputChange} className="input" type="text" name="assignedTo" placeholder="Enter responsible..."/>
          </p><br/>
          <div className="control is-grouped">
            <p className="control">
              <button onClick={ this.createBug} className="button is-warning">Submit</button>
            </p>
          </div>
        </form>
      </div>
    )
  }
}

export default BugForm
