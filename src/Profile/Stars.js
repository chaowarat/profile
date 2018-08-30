import React, { Component } from 'react'
import './Stars.css'
import star from '../star.svg'

export default class Stars extends Component {
  render() {
    const { number } = this.props
    return (
      <ul className="stars-container">
        {[...Array(number || 5)].map((x, i) => (
          <li key={i}><img src={star} alt="bck-img" /></li>
        ))}
      </ul>
    )
  }
}
