import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(
      props
    )
  }
  render () {
    return (
      <div>
        <p>{ this.props.test }</p>
          <h2>Add New Bug Report:</h2>
          <form>
            <p>Description : </p>
            <input type="text" placeholder="Description"/>

            <p>Severity</p>
            <select>
              <option value="volvo">low</option>
              <option value="saab">medium</option>
              <option value="opel">height</option>
            </select>
            <br/>
            <p>Assigned To : </p>
            <input type="text" placeholder="Enter responsible"/>
            <br/><br/>
            <input type="submit" value="Submit"/>
          </form>
      </div>
    )
  }
}

export default Form;
