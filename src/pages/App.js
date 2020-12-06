import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import Login from './login/Login'
import Home from './home/Home'

export default class App extends Component {
  render() {
    return (
      <div id="app">
        {/* <Login /> */}
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
