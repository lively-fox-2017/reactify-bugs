import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './style.css'
import Footer from './Footer'
import Header from './Header'
import BugForm from './BugForm'
import BugList from './BugList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      bugs: [],
      anjing() {
        console.log('kuda')
      }
    }
    this.addData = this.addData.bind(this)
    this.deleteData = this.deleteData.bind(this)
    this.closeData = this.closeData.bind(this)
    this.openData = this.openData.bind(this)
  }
  render() {
    return (
      <div>
        <div className="container">
          <Header/>
          <BugForm addData={this.addData}/>
          <hr/>
          <BugList bugs={this.state.bugs} deleteData={this.deleteData} closeData={this.closeData} openData={this.openData} />
        </div>
        <Footer/>
      </div>
    )
  }
  fetchBugs() {
    this.setState(function(state){
      state.bugs = JSON.parse(localStorage.getItem('bugs')) || []
    })
  }
  addData(data) {
    this.setState(function(state) {
      state.bugs.push(data)
      localStorage.setItem('bugs', JSON.stringify(state.bugs))
    })
    this.forceUpdate()
  }
  deleteData(id) {
    var index = this.state.bugs.findIndex(bug => {
      if(bug.id === id) {
        return bug
      }
    })
    this.setState(function(state) {
      state.bugs.splice(index, 1)
      localStorage.setItem('bugs', JSON.stringify(state.bugs))
    })
    this.forceUpdate()
  }
  closeData(id) {
    var index = this.state.bugs.findIndex(bug => {
      if(bug.id === id) {
        return bug
      }
    })
    this.setState(function(state) {
      state.bugs[index].status = 'Close'
      localStorage.setItem('bugs', JSON.stringify(state.bugs))
    })
    this.forceUpdate()
  }
  openData(id) {
    var index = this.state.bugs.findIndex(bug => {
      if(bug.id === id) {
        return bug
      }
    })
    this.setState(function(state) {
      state.bugs[index].status = 'Open'
      localStorage.setItem('bugs', JSON.stringify(state.bugs))
    })
    this.forceUpdate()
  }
  componentWillMount() {
    this.fetchBugs()
  }
}

export default App;
