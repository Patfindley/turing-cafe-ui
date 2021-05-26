import React from 'react';
import './Reservations.css'

const Reservations = ({ resy }) => {
  if (resy.length) {
    return resy.map(res => {
      return (
        <div className="resy-card" key={res.id}>
        <h3 className="resy-name">{res.name}</h3>
        <h4 className="resy-date">{res.date}</h4>
        <h4 className="resy-time">{res.time} pm</h4>
        <h4 className="resy-guests">Numer of guests:{res.number}</h4>
        <button className="resy-button">Cancel</button>
        </div>
      )
    })
  } else {
    return <h3 className="resy-error">No Reservations Found!</h3>
  }
}

export default Reservations;
