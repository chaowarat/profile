import React, { Component } from 'react'
import Card from './Card'
import './Profile.css'
import Stars from './Stars'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <Card />
        <Stars number={5} />
      </div >
    )
  }
}
