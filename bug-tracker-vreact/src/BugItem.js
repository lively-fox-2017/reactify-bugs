import React from 'react'

function BugItem (props) {
  const deleteBug = () => {
    props.delete(props.id)
  }

  const setStatusClosed = () => {
    props.status(props.id)
  }

  return (
    <div className="card" >
      <header className="card-header">
        <p className="card-header-title">
        BugId: {props.id}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {props.description}
          <span className="tag is-info"> {props.severity}</span>
          <p>Assigned To: {props.assignedTo}</p>
        </div>
        <br />
        <small className="tag is-primary">{props.status}</small>
      </div>
      <footer className="card-footer">
        <a onClick={setStatusClosed} className="is-warning card-footer-item">Close</a>
        <a className="card-footer-item" onClick={deleteBug}>Delete</a>
      </footer>
      <br />
    </div>
  )
}

export default BugItem
