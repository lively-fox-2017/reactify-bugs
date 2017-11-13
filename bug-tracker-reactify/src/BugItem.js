import React from 'react';

const BugItem = props => {
  const setStatusClosed = (e, id) => {
    e.preventDefault()
    let bugs = JSON.parse(localStorage.getItem('bugs'))
    let updatedBugs = bugs.map((item) => {
      if (item.id === id)
        item.status = 'Close'
      return item
    })

    localStorage.setItem('bugs', JSON.stringify(updatedBugs))
    window.location.reload()
  }

  const deleteBug = (e, id) => {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let remainingBugs = bugs.filter((item) => {
      return item.id !== id
    })

    localStorage.setItem('bugs', JSON.stringify(remainingBugs))
    window.location.reload()
  }

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
        BugId: {props.bug.id}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {props.bug.description}
          <span className="tag is-info">{props.bug.severity}</span>
          <p>Assigned To: {props.bug.assignedTo}</p>
        </div>
        <br/>
        <small className="tag is-primary">{props.bug.status}</small>
      </div>
      <footer className="card-footer">
        <a onClick={(e) => setStatusClosed(e, props.bug.id)} className="is-warning card-footer-item">Close</a>
        <a className="card-footer-item" onClick={(e) => deleteBug(e, props.bug.id)}>Delete</a>
      </footer>
    </div>
  )
}

export default BugItem;