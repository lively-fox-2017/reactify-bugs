import React from 'react'
import BugItem from './BugItem'

class BugList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bugs: props.bugs
    }
    this.deleteData = this.deleteData.bind(this)
    this.closeData = this.closeData.bind(this)
    this.openData = this.openData.bind(this)
  }
  deleteData (id) {
    this.props.deleteData(id)
  }
  closeData (id) {
    this.props.closeData(id)
  }
  openData (id) {
    this.props.openData(id)
  }
  render(){
    return (
      <div className="columns">
        <div className="column is-medium" id="listBugs">
          {
            this.state.bugs.map((bug, i) => {
              return <BugItem id={bug.id} desc={bug.description} assignedTo={bug.assignedTo} status={bug.status} severity={bug.severity} key={i} deleteData={this.deleteData} closeData={this.closeData} openData={this.openData}/>
            })
          }
        </div>
      </div>
    )
  }
}
export default BugList
