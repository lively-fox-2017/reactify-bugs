import React from 'react'

const BugItem = (props) => {
  var deleteData = (id) => {
    props.deleteData(id)
  }
  var closeData = (id) => {
    props.closeData(id)
  }
  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          BugId: {props.id}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {props.desc}
            <span className="tag is-info">{props.severity}</span>
            <p>Assigned To: {props.assignedTo}</p>
          </div>
          <br/>
          <small className="tag is-primary">{props.status}</small>
        </div>
        <footer className="card-footer">
          <a className="is-warning card-footer-item" onClick={()=>{closeData(props.id)}}>Close</a>
          <a className="card-footer-item" onClick={()=>{deleteData(props.id)}}>Delete</a>
        </footer>
      </div>
      <br/>
    </div>
  )
}

export default BugItem
