import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: null,
      security: null,
      assignedTo: null
    }
  }
  render () {
    return (
      <div class="">
        <p>{ this.props.tess }</p>
        <form class="" action="" method="post">
          Description :<br/>
          <input type="text" name="" value=""></input><br/>
          Security :<br/>
          <select class="" name="">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select><br/>
          Assigned To :<br/>
          <input type="text" name="" value=""/><br/><br/>
          <button type="button" name="button">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
