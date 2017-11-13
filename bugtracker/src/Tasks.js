import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.taskIterator = this.taskIterator.bind(this);
  }

  taskIterator() {
    let bugs = JSON.parse(localStorage.getItem('bugs')) || [];

    const result= [];

    for(let i = 0; i < bugs.length; i++) {
      let id = bugs[i].id;
      let desc = bugs[i].description;
      let severity = bugs[i].severity;
      let assignedTo = bugs[i].assignedTo;
      let status = bugs[i].status;

      result.push(<Task deleteTask={this.deleteTask} key={id} id={id} desc={desc} severity={severity} assignedTo={assignedTo} status={status}/>);
    }
    return result;
  }

  deleteTask(id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let remainingBugs = bugs.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem('bugs', JSON.stringify(remainingBugs));
    this.forceUpdate();
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-medium" id="listBugs">
          {this.taskIterator()}
        </div>
      </div>
    )
  }
}

export default Tasks;
