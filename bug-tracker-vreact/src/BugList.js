import React from 'react'
import BugItem from './BugItem.js'
import './App.css';


function BugList (props) {

  return (
    <div className="column is-medium" id="listBugs">
      {props.bugs.map((bugItem, index) => {
        return (
          <BugItem id={bugItem.id} description={bugItem.description} assignedTo={bugItem.assignedTo} severity={bugItem.severity} status={bugItem.status} index={index} key={index} delete={props.delete} />
        )
      })}
    </div>
  )
}

export default BugList;
