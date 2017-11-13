import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    // this.state.items = [{id: 1, desc: 'halo', severity: 'low', assignedTo: 'Everyone', status: 'Open'}]
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <BugList items={this.state.items} remove={this.handleRemove} close={this.handleClose}/>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.desc}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ desc: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.desc.length) {
      return;
    }
    const newItem = {
      desc: this.state.desc,
      status: 'Open',
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      desc: ''
    }));
  }

  handleRemove(e) {
    var data = this.state.items;
		data = data.filter(function (el) {
			return el !== e;
    });
    this.setState(prevState => ({
      items: data,
      desc: ''
    }));
    return;
  }

  handleClose(e) {
    console.log(e)
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
    this.setState(prevState => ({
      items: data,
      desc: ''
    }))  
    return  
  }
}

class BugList extends React.Component {
  removeNode (e) {
    console.log('halo')
    this.props.remove(e)
    return;
  }
  closeNode (e) {
    console.log('close')
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
