import React, { Component } from 'react'
import { Container, Title } from 'reactbulma'
import './App.css'
import BugForm from './BugForm';

class App extends Component {
  constructor (props) {
    super(props)
    this.handleBugAddition = this.handleBugAddition.bind(this)
    this.state = {bugs: []}
  }

  handleBugAddition (element) {
    this.setState({
      bugs: this.state.bugs.concat([{
        description: element.description.value,
        severity: element.severity.value,
        user: element.user.value
      }])
    })
  }

  render() {
    return (
      <Container>
        <Title>
          Bug Tracker <small>by HACKTIV8</small>
        </Title>
        <BugForm handleBugAddition={this.handleBugAddition} />
      </Container>
    );
  }
}

export default App;
