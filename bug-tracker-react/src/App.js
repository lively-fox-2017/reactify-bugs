import React, { Component } from 'react'
import FormClass from './components/form'
import CardBug from './components/cardBug'
import logo from './logo.svg'
import './App.css'
// import Chance from 'chance';
// Load Chance
var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();

class App extends Component {
  constructor(){
    super()
    this.state ={
      allBugs:[]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bug Tracker by HACKTIV8</h1>
        </header>
          <div>
            <FormClass
              receiveData={this.receiveDataParent.bind(this)}
            ></FormClass>
          </div><hr/>
            {this.cardBugId.call(this)}
      </div>
    )
  }

  componentWillMount () {
    if (localStorage.allBugs) {
        // alert(JSON.parse(localStorage.allBugs)+ ' INI ALERT')
        const newAllBugs = JSON.parse(localStorage.allBugs)
        console.log('newAllBugs ',newAllBugs)

        this.setState({
          allBugs: newAllBugs.allBugs
        })
    }
  }

  // componentDidMount() {
  //   if (localStorage.allBugs) {
  //     this.setState({
  //       allBugs: JSON.parse(localStorage.getItem('allBugs'))
  //     })
  //   }
  // }

  receiveDataParent(val){
    alert(JSON.stringify(val)+ '   dari depan')
    val.BugId= chance.guid()
    val.status= 'open'
    this.setState({
      allBugs: [...this.state.allBugs, val]
    },()=>{
      localStorage.setItem('allBugs', JSON.stringify(this.state))
      // alert(JSON.stringify(this.state))
    })
  }

  cardBugId () {
    if (this.state.allBugs.length > 0) {
      return <div className="mdl-grid">
        {this.state.allBugs.map((item, index)=>{
          return <div className="mdl-cell--4-col">
          <CardBug 
            style={{align:'center'}}
            onDelete={this.spliceState.bind(this)}
            onUpdate={this.updateAllBugs.bind(this)}
            key={item.BugId} 
            CardBugProps={item} 
            indexnya={index}>
          </CardBug>
        </div>
          // return <CardBug></CardBug>
        })}
      </div>
    }
  }

  spliceState (index) {
    const allBugs = this.state.allBugs;
    this.setState({
      allBugs: [...allBugs.slice(0, index), ...allBugs.slice(index + 1)]
    }, () => {
      // localStorage.removeItem('allBugs')
      localStorage.setItem('allBugs', JSON.stringify(this.state))
    })
  }

  updateAllBugs (objval, index) {
    // const singleBug = Object.assign({}, this.state.allBugs[index], { status: 'close' });
    const allBugs = this.state.allBugs
    allBugs[index].status = 'close'
    
    this.setState({
      allBugs: allBugs
    },()=>{
      // // localStorage.removeItem('allBugs')
      localStorage.setItem('allBugs', JSON.stringify(this.state))
    })
  }
}

export default App

