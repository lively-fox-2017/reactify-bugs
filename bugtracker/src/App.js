import React, { Component } from 'react'
import { Container, Title } from 'reactbulma'
import './App.css'
import BugForm from './BugForm'
import BugList from './BugList'

class App extends Component {
  constructor (props) {
    super(props)
    this.handleBugAddition = this.handleBugAddition.bind(this)
    this.handleDeleteBug = this.handleDeleteBug.bind(this)
    this.handleCloseBug = this.handleCloseBug.bind(this)
    this.state = {bugs: []}
  }

  componentWillMount () {
    this.setState({
      bugs: JSON.parse(localStorage.getItem('bugs') || [])
    })
  }

  handleBugAddition (element) {
    this.setState({
      bugs: this.state.bugs.concat([{
        id: element.id,
        description: element.description.value,
        severity: element.severity.value,
        user: element.user.value,
        status: element.status
      }])
    }, function () {
      localStorage.setItem('bugs', JSON.stringify(this.state.bugs))
    })
  }

  handleDeleteBug (element) {
    const idx = this.state.bugs.findIndex(row => {
      return row.id === element.id
    })

    let bugs = this.state.bugs
    bugs.splice(idx, 1)

    this.setState({
      bugs: bugs
    }, function () {
      localStorage.setItem('bugs', JSON.stringify(this.state.bugs))
    })
  }

  handleCloseBug (element) {
    const idx = this.state.bugs.findIndex(row => {
      return row.id === element.id
    })

    let bugs = this.state.bugs
    bugs[idx].status = 'Closed'

    this.setState({
      bugs: bugs
    }, function () {
      localStorage.setItem('bugs', JSON.stringify(this.state.bugs))
    })
  }

  render() {
    return (
      <Container>
        <Title>
          Bug Tracker <small>by HACKTIV8</small>
        </Title>
        <BugForm handleBugAddition={this.handleBugAddition} />
        <hr />
        <BugList bugs={this.state.bugs} deleteHandler={this.handleDeleteBug} closeHandler={this.handleCloseBug} />
      </Container>
    );
  }
}

export default App;
