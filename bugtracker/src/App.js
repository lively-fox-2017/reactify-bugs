import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'

class BugApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], desc: '', severity: '', assignedTo: '', status: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.state.items = JSON.parse(localStorage.getItem('bugs'))
  }

  render() {
    return (
      <div>
         <div class="container">
      <h1 class="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
      <section class="hero is-medium">
        <div class="hero-body">
          <h2 class="title">Add New Bug Report:</h2>
        <BugList items={this.state.items} remove={this.handleRemove} close={this.handleClose}/>
        <form action="" id="bugInputForm" onSubmit={this.handleSubmit}>
            <label className="label">Description</label>
            <p className="control">
              <input name ="desc" className="input" type="text" id="description" placeholder="Describe a bug..."
              onChange={this.handleChange}
              value={this.state.desc}/>
            </p>
            <label className="label">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity"
                onChange={this.handleChange}
                value={this.state.severity}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label">Assigned To</label>
            <p className="control">
              <input name="assignedTo" className="input" type="text" id="assignedTo" placeholder="Enter responsible..."
              onChange={this.handleChange}
              value={this.state.assignedTo}/>
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning"> Submit #{this.state.items.length + 1}</button>
              </p>
            </div>
          </form>
          </div>
          </section>
      </div>
      </div>
    );
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value
    // this.setState({ desc: e.target.value });
    this.setState({
      [name]: value
    }, () => {console.log(this.state)});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.desc.length) {
      return;
    }
    const newItem = {
      desc: this.state.desc,
      assignedTo: this.state.assignedTo,
      severity: this.state.severity,
      status: 'Open',
      id: Date.now()
    };
    this.setState({items:this.state.items.concat(newItem)}, () => {
      localStorage.setItem('bugs', JSON.stringify(this.state.items))
    })
  }

  handleRemove(e) {
    var data = this.state.items;
		data = data.filter(function (el) {
			return el !== e;
    });
    this.setState({items: data}, () => {
      localStorage.setItem('bugs', JSON.stringify(data))
    })
    return;
  }

  handleClose(e) {
    var data = this.state.items;    
    for(var i in data) {
      if(data[i] == e) {
        if(data[i].status === 'Open') {
          data[i].status = 'Close'
        } else {
          data[i].status = 'Open'
        }
        break
      }
    }
    this.setState({items: data}, () => {
      localStorage.setItem('bugs', JSON.stringify(data))
    })
    return  
  }
}

class BugList extends React.Component {
  removeNode (e) {
    this.props.remove(e)
    return;
  }
  closeNode (e) {
    this.props.close(e)
    return;
  }
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-medium">
        {this.props.items.map(item => (
          <BugItem key={item.id}
          id={item.id} 
          desc={item.desc}
          severity={item.severity}
          assignedTo={item.assignedTo}
          status={item.status} 
          remove={this.removeNode.bind(this, item)}
          close={this.closeNode.bind(this, item)}/>
        ), this)}
        </div>
      </div>
      </div>
    );
  }
}

class BugItem extends React.Component {
  render () {
    return (
      <div className="card" key={this.props.key}>
      <header className="card-header">
        <p className="card-header-title">
        BugId: {this.props.id}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {this.props.desc}
          <br/>
          <span className="tag is-info">{this.props.severity}</span>
          <p>Assigned To: {this.props.assignedTo}</p>
        </div>
        <small className="tag is-primary">{this.props.status}</small>
      </div>
      <footer className="card-footer">
        <button onClick={(e) => {
          e.stopPropagation();
          this.props.close();
        }} className="is-warning card-footer-item">Close</button>
        <button type="button" className="card-footer-item" 
          onClick={(e) => {
          e.stopPropagation();
          this.props.remove();
        }}>Delete</button>
      </footer>
      </div>
    )
  }
}

export default BugApp;
