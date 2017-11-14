import React from 'react'
import './App.css';


function BugList (props) {
  const deleteBug = (id) => {
    props.delete(id)
  }

  const setStatusClosed = (id) => {
    props.status(id)
  }

  return (
    <div className="column is-medium" id="listBugs">
      {props.bugs.map((bugItem, index) => {
        return (
          <div className="card" key={index}>
            <header className="card-header">
              <p className="card-header-title">
              BugId: {bugItem.id}
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {bugItem.description}
                <span className="tag is-info"> {bugItem.severity}</span>
                <p>Assigned To: {bugItem.assignedTo}</p>
              </div>
              <br />
              <small className="tag is-primary">{bugItem.status}</small>
            </div>
            <footer className="card-footer">
              <a onClick={setStatusClosed(bugItem.id)} className="is-warning card-footer-item">Close</a>
              <a className="card-footer-item" onClick={deleteBug}>Delete</a>
            </footer>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default BugList;
