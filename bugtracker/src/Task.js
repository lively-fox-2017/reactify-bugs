import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
    }
    this.closeBug = this.closeBug.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  closeBug(event) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let updatedBugs = bugs.map((item) => {
      if (item.id === this.props.id)
        item.status = 'Close'
      return item
    })
    localStorage.setItem('bugs', JSON.stringify(updatedBugs))
    this.setState({ status: 'Close' })
  }

  deleteTask() {
    this.props.deleteTask(this.props.id);
  }

  render() {
    return (
      <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
            BugId: { this.props.id }
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              <span className="tag is-info">{this.props.severity}</span>
              <p>Assigned To: {this.props.assignedTo}</p>
            </div>
            <br/>
            <small className="tag is-primary">{this.state.status}</small>
          </div>
          <footer className="card-footer">
            <a onClick={this.closeBug} className="is-warning card-footer-item">Close</a>
            <a onClick={this.deleteTask} className="card-footer-item" >Delete</a>
          </footer>
        </div>
        <br/>
      </div>
    )
  }
}

export default Task;
