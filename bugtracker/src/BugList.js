import React, { Component } from 'react';
import BugItem from './BugItem.js';

class BugList extends Component {
  render() {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let bugItem = bugs.map(bug => {
      return <BugItem bug={bug} key={bug.id}/>
    })

    return(
      <div className="colums">
        <div className="column is-medium" id="listBugs">
          { bugItem }
        </div>
      </div>
    )
  }
}

export default BugList;
