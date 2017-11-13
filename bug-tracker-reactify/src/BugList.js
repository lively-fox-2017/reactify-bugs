import React, { Component } from 'react';
import BugItem from './BugItem';

class BugList extends Component {

  render() {

    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    let bugItems = bugs.map((bug) => {
      return <BugItem bug={bug} key={bug.id}/>;
    });

    return(
      <div className="columns">
        <div className="column is-medium" id="listBugs">
          { bugItems }
        </div>
      </div>
    );
  }

}

export default BugList;
