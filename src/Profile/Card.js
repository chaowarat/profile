import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
