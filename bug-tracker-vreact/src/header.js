import React from 'react'
import logo from './logo.svg';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
    </header>
  )
}

export default Header
