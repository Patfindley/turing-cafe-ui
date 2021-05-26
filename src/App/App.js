import React, { Component } from 'react';
import './App.css';
import fetchReservations from '../ApiCalls.js'
import Reservations from '../Reservations/Reservations.js'
import Form from '../Form/Form.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: '',
      dateInput: '',
      timeInput: '',
      guestsInput: '',
      reservations: []
    }

  }

  componentDidMount = async() => {
    await fetchReservations()
    .then(data => this.setState({reservations: data}))
    console.log(this.state.reservations);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitResy = event => {
    event.preventDefault();
    const newRes = {
      id: Date.now(),
      name: this.state.nameInput,
      date: this.state.dateInput,
      time: this.state.timeInput,
      number: this.state.guestsInput
    }
    console.log(newRes)
    this.bookResy(newRes)
    this.clearInputs()
  }

  bookResy = newRes => {
    this.setState({reservations: [...this.state.reservations, newRes]})
  }

  clearInputs = () => {
    this.setState({
      nameInput: '',
      dateInput: '',
      timeInput: '',
      guestsInput: '',
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            nameInput={this.state.nameInput}
            dateInput={this.state.dateInput}
            timeInput={this.state.timeInput}
            guestsInput={this.state.guestsInput}
            handleChange={this.handleChange}
            submitResy={this.submitResy}
          />
        </div>
        <div className='resy-container'>
        {this.state.reservations.length &&
          <Reservations
          resy={this.state.reservations}
          />
        }
        </div>
      </div>
    )
  }
}

export default App;
