import React from 'react';

const Form = ({ nameInput, dateInput, timeInput, guestsInput, handleChange, submitResy }) => {
  return (
    <form>
      <input
        className="name-input"
        type="text"
        placeholder="Name"
        name="nameInput"
        value={nameInput}
        onChange={event => handleChange(event)}
        />
      <input
      className="date-input"
        type="text"
        placeholder="Date (mm/dd)"
        name="dateInput"
        value={dateInput}
        onChange={event => handleChange(event)}
        />
      <input
      className="time-input"
        type="text"
        placeholder="Time"
        name="timeInput"
        value={timeInput}
        onChange={event => handleChange(event)}
        />
      <input
      className="guests-input"
        type="text"
        placeholder="Number of guests"
        name="guestsInput"
        value={guestsInput}
        onChange={event => handleChange(event)}
        />
      <button
        className="resy-button"
        onClick={event => submitResy(event)}>
        Make Reservation
        </button>
    </form>
  )
}

export default Form;
