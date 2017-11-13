import React, { Component } from 'react';
import BugTrackerForm from './BugTrackerForm';

class BugTracker extends Component {

  render() {
    return(
      <section className="hero is-medium">
        <div className="hero-body">
          <BugTrackerForm/>
        </div>
      </section>
    );
  }

}

export default BugTracker;
