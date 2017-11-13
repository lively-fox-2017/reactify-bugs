import React from 'react'

const BugItem = (props) => {

  const setStatusClosed = (id) => {
    props.closeHandler({
      id: id
    })
  }

  const deleteBug = (id) => {
    props.deleteHandler({
      id: id
    })
  }

  const listItem = props.bugs.map((bug, index) => {
    return (<div className="card" key={index}>
      <header className="card-header">
        <p className="card-header-title">
        BugId: {bug.id}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {bug.description}
          <span className="tag is-info">{bug.severity}</span>
          <p>Assigned To: {bug.user}</p>
        </div>
        <br />
        <small className="tag is-primary">{bug.status}</small>
      </div>
      <footer className="card-footer">
        <a onClick={() => setStatusClosed(bug.id)} className="is-warning card-footer-item">Close</a>
        <a className="card-footer-item" onClick={() => deleteBug(bug.id)}>Delete</a>
      </footer>
    </div>)
  })
  return (
    <div>
      {listItem}
    </div>
  )
}

export default BugItem
