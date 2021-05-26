import React, { Component } from 'react';
import './App.css';
import fetchReservations from '../ApiCalls.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }

  }

  componentDidMount = async() => {
    await fetchReservations()
    .then(data => this.setState({reservations: data}))
    console.log(this.state.reservations);
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
