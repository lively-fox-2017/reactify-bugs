import React, { Component } from 'react';

class BugItem extends Component {

  setStatusClosed(event, id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'));

    let updatedBugs = bugs.map((item) => {
      if (item.id === id)
        item.status = 'Close'
      return item
    });

    localStorage.setItem('bugs', JSON.stringify(updatedBugs));

    window.location.reload();

    event.preventDefault();
  }

  deleteBug(event, id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'));

    let remainingBugs = bugs.filter((item) => {
      return item.id !== id
    });

    localStorage.setItem('bugs', JSON.stringify(remainingBugs));

    window.location.reload();

    event.preventDefault();
  }

  render() {
    return(
      <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
            BugId: {this.props.bug.id}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              {this.props.bug.description}&nbsp;
              <span className="tag is-info">{this.props.bug.severity}</span>
              <p>Assigned To: {this.props.bug.assignedTo}</p>
            </div>
            <br/>
            <small className="tag is-primary">{this.props.bug.status}</small>
          </div>
          <footer className="card-footer">
            <a onClick={(event) => this.setStatusClosed(event, this.props.bug.id)} className="is-warning card-footer-item">Close</a>
            <a className="card-footer-item" onClick={(event) => this.deleteBug(event, this.props.bug.id)}>Delete</a>
          </footer>
        </div>
        <br/>
      </div>
    );
  }

}

export default BugItem;
