import React, { Component } from 'react';
import BugTrackerForm from './BugTrackerForm';
import BugList from './BugList';

class BugTracker extends Component {

  render() {
    return(
      <div>
        <section className="hero is-medium">
          <div className="hero-body">
            <BugTrackerForm/>
          </div>
        </section>
        <hr/>
        <BugList/>
      </div>
    );
  }

}

export default BugTracker;
