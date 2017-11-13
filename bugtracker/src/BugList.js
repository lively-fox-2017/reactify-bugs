import React from 'react'
import BugItem from './BugItem'

const BugList = (props) => {
  return (
    <div className="columns">
      <div className="column is-medium">
        <BugItem bugs={props.bugs} deleteHandler={props.deleteHandler} closeHandler={props.closeHandler} />
      </div>
    </div>
  )
}

export default BugList
